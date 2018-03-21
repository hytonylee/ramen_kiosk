class Api::MenusController < ApplicationController
  # before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
  before_action :set_menu, only: [:show, :update, :destroy]



  # GET /menus
  def index
    menus = Menu.order(created_at: :desc)
    render json: menus
  end

  # GET /menus/1
  def show
    render json: @menu
  end

  # POST /menus
  def create
    # byebug
    menu = Menu.new menu_params
    current_user = User.find(JWT.decode(params[:user],Rails.application.secrets.secret_key_base)[0]["id"])
    menu.user = current_user
    menu.save!

    render json: {id: menu.id}
  end

  # PATCH/PUT /menus/1
  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menus/1
  def destroy
    @menu.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu
      @menu = Menu.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_params
      params.require(:menu).permit(:title)
    end
end
