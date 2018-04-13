class AddIsDisplayToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :is_display, :boolean
  end
end
