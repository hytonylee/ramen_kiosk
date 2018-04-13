class AddToppingToMenuOrder < ActiveRecord::Migration[5.1]
  def change
    add_reference :menu_orders, :topping, foreign_key: true
  end
end
