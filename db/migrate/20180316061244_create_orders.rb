class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer :total
      t.integer :tax

      t.timestamps
    end
  end
end
