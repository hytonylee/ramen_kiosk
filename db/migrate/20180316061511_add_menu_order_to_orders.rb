class AddMenuOrderToOrders < ActiveRecord::Migration[5.1]
  def change
    add_reference :orders, :menu_order, foreign_key: true
  end
end
