class MenuOrder < ApplicationRecord
  belongs_to :item
  belongs_to :order
  belongs_to :topping
end
