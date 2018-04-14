


User.destroy_all



Menu.destroy_all

lunch_menu = Menu.create(
  title: 'Lunch Menu',
  description:
    'The Spring Business Lunch provides you a quick and delight choices for busy work week.',
  display: true,
  image: File.open('app/assets/images/menu_sample.jpg')
)



AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
