class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.references :menu, foreign_key: true
      t.string :item_name
      t.string :item_price
      t.string :item_image

      t.timestamps
    end
  end
end
