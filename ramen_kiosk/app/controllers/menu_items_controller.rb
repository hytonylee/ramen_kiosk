class MenuItemsController < InheritedResources::Base

  private

    def menu_item_params
      params.require(:menu_item).permit(:menu_id, :item_id)
    end
end

