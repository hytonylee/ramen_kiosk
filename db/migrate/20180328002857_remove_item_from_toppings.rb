class RemoveItemFromToppings < ActiveRecord::Migration[5.1]
  def change
    remove_reference :toppings, :item, foreign_key: true
  end
end
