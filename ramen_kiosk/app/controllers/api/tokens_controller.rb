class Api::TokensController < Api::ApplicationController
  # Users must make HTTP requests to this action with
  # their email & password to receive a token (to sign in).
  def create
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      render json: {
        jwt: encode_token({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            full_name: user.full_name
        })
      }
    else
      # Authentication fails
      # Fool attackers by always responding with a 404 instead
      # of instructive error message like "Incorrect Password"
      # head :not_found
      render(
        json: {
          errors: [{
            type: "NotFound"
          }]
        },
        status: :not_found
      )
    end
  end

  private
  def encode_token(payload = {}, exp = 24.hours.from_now)

    JWT.encode(
      payload,
      Rails.application.secrets.secret_key_base
    )
  end
end







##
