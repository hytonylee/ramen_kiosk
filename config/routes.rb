Rails.application.routes.draw do

  resources :item_toppings
  resources :menu_items
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  match '/patrons', to: 'patron#index', via: :all
  match '/patrons/*path', to: 'patron#index', via: :all





  namespace :api, defaults: {format: :json} do
    resources :tokens, only: [:create]
    resources :menus
    resources :items
    resources :menu_items
  end

  namespace :admin do

    resources :dashboard, only: [:index]

  end

  root 'menus#index'


  resources :menus, shallow: true do
    # resources :items, only: [:create, :destroy]
    # resources :toppings, only: [:create, :destroy]
  end

  resources :items, shallow: true do
  end

  resources :menu_orders
  resources :orders

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
