class CreateMenuOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_orders do |t|
      t.references :item, foreign_key: true
      t.references :order, foreign_key: true

      t.timestamps
    end
  end
end
