class Item < ApplicationRecord
  has_many :menu_orders, dependent: :destroy
  has_many :menus, through: :menu_items
  has_many :menu_items
  has_many :orders, through: :menu_orders

  mount_uploader :image, ImageUploader

  validates :item_name, presence: true, uniqueness: {
    case_sensitive: false
  }
  before_validation :downcase_name

  private
  def downcase_name
    self.item_name.downcase!
  end
end
