class Api::ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  cattr_accessor :current_user

  private
  def user_signed_in?
    current_user.present?
  end
  helper_method :user_signed_in?

  def current_user
    if session[:user_id].present?
      @current_user ||= User.find_by(id: session[:user_id])
      # 👆 OR-EQUAL only assigns to variable if variable is `nil`
      # @current_user = @current_user || User.find(session[:user_id]))
    end
  end
  helper_method :current_user
  # `helper_method` makes a controller method available to all
  # views (or templates)

  def authenticate_user!
    unless user_signed_in?
      flash[:alert] = 'You sign in or sign up first!'
      redirect_to new_session_path
    end
  end
end
