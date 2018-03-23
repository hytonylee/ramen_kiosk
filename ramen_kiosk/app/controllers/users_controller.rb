class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params

    if @user.save
      # The `session` is an object available in all controllers.
      # It uses cookies to implement state accross multiple requests.
      # The data stored is encrypted by Rails. The data is often stored
      # server side (i.e. database) instead of in the cookie.
      # The cookie will hold the key (or id) to access that data
      # from the db.
      session[:user_id] = @user.id
      flash[:notice] = "Thank you for signing in!"
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @user = User.find params[:id]
  end

  private
  def user_params
    params.require(:user).permit(
      :first_name, :last_name, :email, :password, :password_confirmation, :address
    )
  end
end
