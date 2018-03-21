class RemoveMenuOrderFromItems < ActiveRecord::Migration[5.1]
  def change
    remove_reference :items, :menu_order, foreign_key: true
  end
end
