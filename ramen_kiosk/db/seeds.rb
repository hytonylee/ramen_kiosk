# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



PASSWORD = 'supersecret'

User.destroy_all

super_user = User.create(
  first_name: 'Mr',
  last_name: 'Ramen',
  email: 'admin@ramen.ca',
  password: PASSWORD,
  is_admin: true
)

Menu.destroy_all

lunch_menu = Menu.create(
  title: 'Lunch Menu',
  description:
    'The Spring Business Lunch provides you a quick and delight choices for busy work week.',
  display: true,
  image: File.open('app/assets/images/menu_sample.jpg')
)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
