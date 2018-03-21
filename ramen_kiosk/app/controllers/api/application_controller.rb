class Api::ApplicationController < ApplicationController
  # When making POST requests to our controllers Rails
  # will require an authenticity token in the params
  # to verify that POST originated from one of its
  # forms. This doesn't make for a JSON Web API therefore
  # we'll skip that code.
  skip_before_action :verify_authenticity_token



  # the priority for rescue_from is in the reverse error of the lines they were
  # declared in. Meaning that more specific errors should be at the bottom while
  # more generic errors should be at the top.

  # StandardError is the ancestor class of all errors that might occurs from our
  # own code
  rescue_from StandardError, with: :standard_error
  # 'resuce_from' is a method taht usable inside controllers to prevent
  # applicaiton from crashing when an exception (a crash) occurs. If given an
  # 'with:' with a symbol named after a method, that method will bed called
  # instead of crashing the program.
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid




  def not_found
     render(
       json: {
         errors: [{
           type: "NotFound"
         }]
       },
       status: :not_found # :not_found is alias for 404 in rails
     )
   end


  def current_user
    token = request.headers["AUTHORIZATION"]

    # The decoded token will be array containing
    # the payload and the JWT header in that order.
    begin
      payload = JWT.decode(
        token,
        Rails.application.secrets.secret_key_base
      )&.first

      # To get a value from payload, make sure to use
      # strings to access the keys. The payload's hash's
      # keys are all strings and not symbols.
      @user ||= User.find_by(id: payload["id"])
    rescue JWT::DecodeError => error
      nil
    end
  end
  helper_method :current_user

  private
  def authenticate_user!
    unless current_user.present?
      render(
        json: {
          errors: [{
            type: "Unauthorized"
          }]
        },
        status: :unauthorized # alias for status code 401
      )
    end
  end

  protected
  # protected is like private except that it prevents descendent
 # classes from using protected methods.

  def record_not_found(error)
    # byebug
    render( json: {
      errors:
      [{
        type: error.class.to_s,
        message: error.message
      }]},
      status: :not_found
    )
  end

  def standard_error(error)
    logger.error "#{error.class.to_s} #{error.message}"
    logger.error error.backtrace.join("\r\n")

    render( json: {
      errors:
      [{
        type: error.class.to_s,
        message: error.message
      }]},
      status: :internal_server_error
    )
  end

  def record_invalid(error)
    record = error.record
    errors = record.errors.map do |field, message|
      {
        type: error.class.to_s,
        record_type: record.class.to_s,
        field: field,
        message: message
      }
    end

    render(
      json: {
        errors: errors
      },
      status: :unprocessable_entity # alias for status code 422
    )
  end
end
