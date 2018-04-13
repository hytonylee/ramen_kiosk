class RemoveMenuFromItems < ActiveRecord::Migration[5.1]
  def change
    remove_reference :items, :menu, foreign_key: true
  end
end
