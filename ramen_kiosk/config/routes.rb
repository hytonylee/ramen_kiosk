Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :menus
    resources :tokens
  end


  root 'menus#index'

  resources :menu_orders
  resources :orders
  resources :items
  resources :menus
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
