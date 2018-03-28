class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :item_price, :image
  has_one :menu
end
