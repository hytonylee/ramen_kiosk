class MenuSerializer < ActiveModel::Serializer
  attributes :id, :title, :display, :image, :description
  has_one :user, key: :author
  class UserSerializer < ActiveModel::Serializer
    attributes(
      :id, :first_name, :last_name,
      :full_name, :created_at, :updated_at
    )
  end


  has_many :items

  class ItemSerializer < ActiveModel::Serializer
    attributes :item_name, :item_price, :item_description, :image

    def author_full_name
      object.user&.full_name
    end
  end
end
