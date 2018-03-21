class MenuOrderSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item
  has_one :order
end
