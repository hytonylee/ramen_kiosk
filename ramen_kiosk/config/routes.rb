Rails.application.routes.draw do

  match '/patrons', to: 'patron#index', via: :all
  match '/patrons/*path', to: 'patron#index', via: :all

  match '/servers', to: 'server#index', via: :all
  match '/servers/*path', to: 'server#index', via: :all



  namespace :api, defaults: {format: :json} do
    resources :tokens, only: [:create]
    namespace :servers do
      resources :menus
    end
  end

  namespace :admin do

    resources :dashboard, only: [:index]

  end

  root 'patron#index'

  resources :menu_orders
  resources :orders
  resources :items
  resources :menus
  resources :users
  resource :session, only: [:new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
