class Item < ApplicationRecord
  belongs_to :menu
  has_many :menu_orders
  has_many :toppings
  has_many :orders, through: :menu_orders
end
