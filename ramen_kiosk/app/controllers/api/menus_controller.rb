class Api::MenusController < Api::ApplicationController

  before_action :find_menu, only: [:show, :update, :destroy]

  def index
    menus = Menu.order(created_at: :desc)
    render json: menus
  end

  def show
    byebug
    render json: @menu
  end

  def create
    menu = Menu.new question_params
    menu.user = current_user
    menu.save!
    render json: {id: menu.id}
  end

  private
  def find_menu
    @menu = Menu.find params[:id]
  end

  # def question_params
  #   params.require(:menu).permit(:title, :body)
  # end
  def question_params
    params.require(:menu).permit(:title, :display, :user_id, :image, :description, item_ids: [])
  end
end
