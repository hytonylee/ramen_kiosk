class ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_item, only: [:show, :edit, :update, :destroy]

  # GET /items
  def index
    @items = Item.all
  end

  # GET /items/1
  def show
  end

  # GET /items/new
  def new
    @item = Item.new
  end

  # GET /items/1/edit
  def edit
  end

  # POST /items
  def create
    @item = Item.new(item_params)

    if @item.save
      redirect_to @item, notice: 'Item was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      redirect_to @item, notice: 'Item was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
    redirect_to items_url, notice: 'Item was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_item
      @item = Item.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def item_params
      params.require(:item).permit(:menu_id, :item_name, :item_price, :item_image)
    end

    def authorize_user!
      unless can?(:manage, @item)
        flash[:alert] = 'Access Denied!'
        redirect_to menu_path(@item.menu)
      end
    end
end
