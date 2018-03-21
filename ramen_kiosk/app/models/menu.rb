class Menu < ApplicationRecord
  belongs_to :user, optional: :true
  has_many :items, dependent: :destroy
  validates :title, presence: true

  mount_uploader :image, ImageUploader
end
