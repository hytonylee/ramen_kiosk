class ChangeItemImageToImageFromItems < ActiveRecord::Migration[5.1]
  def change
    rename_column(:items, :item_image, :image)
  end
end
