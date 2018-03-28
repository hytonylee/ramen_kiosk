Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  match '/patrons', to: 'patron#index', via: :all
  match '/patrons/*path', to: 'patron#index', via: :all





  namespace :api, defaults: {format: :json} do
    resources :tokens, only: [:create]
    resources :menus
  end

  namespace :admin do

    resources :dashboard, only: [:index]

  end

  root 'menus#index'


  resources :menus, shallow: true do
    # resources :items, only: [:create, :destroy]
    # resources :toppings, only: [:create, :destroy]
  end

  resources :menu_orders
  resources :orders
  resources :items
  # resources :menus
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
