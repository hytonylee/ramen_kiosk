class ItemToppingSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item
  has_one :topping
end
