class MenuSerializer < ActiveModel::Serializer
  attributes :id, :title, :display, :image
  has_one :user
end
