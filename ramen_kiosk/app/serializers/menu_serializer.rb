class MenuSerializer < ActiveModel::Serializer
  attributes :id, :title, :display, :image, :description
  has_one :user
end
