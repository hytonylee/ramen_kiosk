class MenusController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_menu, except: [:new, :index, :create]
  before_action :authorize_user!, only: [:edit, :update, :destroy]
  


  # GET /menus
  def index
    @menus = Menu.order(created_at: :desc)

  end

  # GET /menus/1
  def show

  end

  # GET /menus/new
  def new
    @menu = Menu.new
  end

  # GET /menus/1/edit
  def edit
  end

  # POST /menus
  def create
    # byebug
    @menu = Menu.new(menu_params)
    if @menu.save
      redirect_to @menu, notice: 'Menu was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /menus/1
  def update
    if @menu.update(menu_params)
      redirect_to @menu, notice: 'Menu was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /menus/1
  def destroy
    @menu.destroy
    redirect_to menus_path, notice: 'Menu was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_menu
      @menu = Menu.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_params
      params.require(:menu).permit(:title, :display, :user_id, :image, :description)
    end

    def authorize_user!
      unless can?(:manage, @menu)
        flash[:alert] = 'Access Denied!'
        redirect_to menu_path(@menu)
      end
    end
end
