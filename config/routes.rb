Rails.application.routes.draw do


  get '/help', to: 'static_pages#help'

  get '/contact', to: 'static_pages#contact'

  get '/about',  to: 'static_pages#about'

  get '/bolus',  to: 'static_pages#bolus'

  root 'static_pages#home'
end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html