class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :item_price, :item_image
  has_one :menu
end
