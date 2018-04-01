class ItemToppingsController < InheritedResources::Base

  private

    def item_topping_params
      params.require(:item_topping).permit(:item_id, :topping_id)
    end
end

