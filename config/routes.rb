FayeChat::Application.routes.draw do
  resources :messages, only: [:index, :create]
end
