# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'
  resources :users , only: %i[index] do
    collection { post :import, :sorting, :search }
  end
end
