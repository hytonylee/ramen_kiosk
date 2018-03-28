class MenuItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :menu
  has_one :item
end
