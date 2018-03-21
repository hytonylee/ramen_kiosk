class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private
  def user_sign_in?
    current_user.present?
  end
  helper_method :user_sign_in?

  def current_user
    if session[:user_id].present?
      @current_user ||= User.find_by(id: session[:user_id])
    end
  end

  def authenticate_user!
    unless user_sign_in?
      flash[:alert] = 'You need to login in or sign up first!!'
      redirect_to new_session_path
    end
  end
end
