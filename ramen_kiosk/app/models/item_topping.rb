class ItemTopping < ApplicationRecord
  belongs_to :item
  belongs_to :topping
end
