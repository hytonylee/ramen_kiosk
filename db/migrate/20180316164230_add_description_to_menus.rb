class AddDescriptionToMenus < ActiveRecord::Migration[5.1]
  def change
    add_column :menus, :description, :string
  end
end
