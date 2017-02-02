Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :destroy, :show, :update, :index]
    resources :backings, only: [:create, :destroy, :show, :update, :index]
    resources :rewardings, only: [:create, :destroy, :show, :index]
    resources :rewards, only: [:create, :destroy, :show, :update, :index]
    resources :tags, only: [:create, :destroy, :index, :show]
    resources :taggings, only: [:create, :destroy]
  end

  root "static_pages#root"
end
