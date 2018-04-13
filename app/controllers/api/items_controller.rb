class Api::ItemsController < Api::ApplicationController
  before_action :find_item, except: [:new, :index]


  # GET /items
  def index
    items = Item.order(created_at: :desc)
    render json: items
  end


  def show_item
    show_items = Menu.find(params[:menu_id]).items
    render json: show_items
  end


  # GET /items/1
  def show
    render json: @item
  end



  private

    def find_item
      @item = Item.find(params[:id])
    end


    def item_params
      params.require(:item).permit(:id, :item_name, :item_price, :item_description, :images)
    end

end
