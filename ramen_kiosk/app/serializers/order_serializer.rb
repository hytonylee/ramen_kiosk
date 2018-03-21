class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :tax
end
