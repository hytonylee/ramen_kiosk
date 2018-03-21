class AddMenuOrderToItems < ActiveRecord::Migration[5.1]
  def change
    add_reference :items, :menu_order, foreign_key: true
  end
end
