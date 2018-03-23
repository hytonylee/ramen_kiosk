class SessionsController < ApplicationController

  def new
  end

  def create
      # byebug
      user = User.find_by(email: session_params[:email])
      if user&.authenticate(params[:session][:password])
        session[:user_id] = user.id
        redirect_to root_path, notice: "Logged in"
      else

        flash[:notice] = "Wrong email or password"
        render :new
      end
    end

    def destroy
      session[:user_id] = nil
      flash[:message] = 'Signed Out!!'
      redirect_to root_path
    end

    private
    def session_params
      params.require(:session).permit(:email, :password)
    end
end
