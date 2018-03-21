class Topping < ApplicationRecord
  belongs_to :item
  has_many :orders, through: :menu_orders
end
