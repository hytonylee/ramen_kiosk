class CreateItemToppings < ActiveRecord::Migration[5.1]
  def change
    create_table :item_toppings do |t|
      t.references :item, foreign_key: true
      t.references :topping, foreign_key: true

      t.timestamps
    end
  end
end
