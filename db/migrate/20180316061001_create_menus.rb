class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.string :title
      t.boolean :display
      t.references :user, foreign_key: true
      t.string :image

      t.timestamps
    end
  end
end
