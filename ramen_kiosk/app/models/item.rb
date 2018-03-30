class Item < ApplicationRecord

  has_many :menu_items, dependent: :destroy
  has_many :menus, through: :menu_items

  has_many :menu_orders, dependent: :destroy
  has_many :orders, through: :menu_orders

  mount_uploader :image, ImageUploader

  validates :item_name, presence: true, uniqueness: {
    case_sensitive: false
  }
  before_validation :downcase_name

  def list_display
    "#{item_name} - #{item_price}"
  end

  private
  def downcase_name
    self.item_name.downcase!
  end
end
