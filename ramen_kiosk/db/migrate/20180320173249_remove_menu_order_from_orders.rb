class RemoveMenuOrderFromOrders < ActiveRecord::Migration[5.1]
  def change
    remove_reference :orders, :menu_order, foreign_key: true
  end
end
