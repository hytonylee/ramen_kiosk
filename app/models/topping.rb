class Topping < ApplicationRecord
  has_many :item_toppings
  has_many :orders, through: :menu_orders
end
