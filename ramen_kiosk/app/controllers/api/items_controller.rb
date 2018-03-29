class Api::ItemsController < Api::ApplicationController
  before_action :find_item, except: [:new, :index]


  # GET /items
  def index
    @items = Item.order(created_at: :desc)
    render json: @items
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
      params.require(:item).permit(:item_name, :item_price, :item_description, :images)
    end

    def authorize_user!
      unless can?(:manage, @item)
        flash[:alert] = 'Access Denied!'
        redirect_to item_path(@item)
      end
    end
end
