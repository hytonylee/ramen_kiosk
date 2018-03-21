class Order < ApplicationRecord
  has_many :menu_orders
  has_many :items, through: :menu_orders
  has_many :toppings, through: :menu_orders
end
