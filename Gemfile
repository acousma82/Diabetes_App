source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails'
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
#bootstrap-sass is a Sass-powered version of Bootstrap 3, ready to drop right into your Sass powered applications.
gem 'bootstrap'
#will_paginate provides a simple API for performing paginated queries with Active Record, DataMapper and Sequel, 
#and includes helpers for rendering pagination links in Rails, Sinatra and Merb web apps 
gem 'will_paginate',           '3.1.6'
# Hooks into will_paginate to format the html to match Twitter Bootstrap styling.
gem 'bootstrap-will_paginate', '1.0.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
gem 'bcrypt'
#providng Js scripts with data from the rails database
gem 'gon'
gem 'faker'
gem 'jquery-rails', '4.3.1'
# Use carrierwave for uploading images
gem 'carrierwave',             '1.1.0'
# Use mini-magick to automatically minimize pictures
gem 'mini_magick',             '4.9.4'
#Use fog-aws to use amazon web services in applications
gem 'fog-aws',                 '2.0.0'
#The GNU Readline library provides a set of functions for use by applications 
#that allow users to edit command lines as they are typed in.
#The Readline library includes additional functions to maintain a list of previously-entered command lines, 
#to recall and perhaps reedit those lines, and perform csh-like history expansion on previous commands.
gem 'rb-readline'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  # Use sqlite3 as the database for Active Record in development
  gem 'sqlite3'
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'rails-controller-testing'
  gem 'minitest-reporters'       
  gem 'guard'                    
  gem 'guard-minitest'           
end


group :production do
  #postgresql gem for deploying on heroku 
  gem 'pg', '0.18.4'
end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
