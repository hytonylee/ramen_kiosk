class Api::MenuItemsController < Api::ApplicationController

  before_action :find_menu, only: [:show]

  def index
    menu_items = MenuItem.order(created_at: :desc)
    render json: menu_items
  end

  def show
    render json: @menu_item
  end



  def create
    menu_item = MenuItem.new menu_items_param
    menu_item.user = current_user
    menu_item.save!
    render json: {id: menu_item.id}
  end

  private
  def find_menu
    @menu_item = MenuItem.find params[:id]
  end


  def menu_items_param
    params.require(:menu_item).permit(:id, :menu_id, :item_id)
  end
end
