class MenuOrdersController < ApplicationController
  before_action :find_menu_order, only: [:show, :edit, :update, :destroy]

  # GET /menu_orders
  def index
    @menu_orders = MenuOrder.all
  end

  # GET /menu_orders/1
  def show
  end

  # GET /menu_orders/new
  def new
    @menu_order = MenuOrder.new
  end

  # GET /menu_orders/1/edit
  def edit
  end

  # POST /menu_orders
  def create
    @menu_order = MenuOrder.new(menu_order_params)

    if @menu_order.save
      redirect_to @menu_order, notice: 'Menu order was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /menu_orders/1
  def update
    if @menu_order.update(menu_order_params)
      redirect_to @menu_order, notice: 'Menu order was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /menu_orders/1
  def destroy
    @menu_order.destroy
    redirect_to menu_orders_url, notice: 'Menu order was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def find_menu_order
      @menu_order = MenuOrder.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_order_params
      params.require(:menu_order).permit(:item_id, :order_id)
    end
end
