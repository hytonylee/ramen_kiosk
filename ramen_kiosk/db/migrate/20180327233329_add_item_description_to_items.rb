class AddItemDescriptionToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :item_description, :string
  end
end
