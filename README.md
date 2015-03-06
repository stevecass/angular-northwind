#Angular on northwind data

A simple angular front-end to the old microsoft northwind database.

The angular part is under app/assets/javascripts as this is a rails app.

The rails app is a slightly modified version of https://github.com/aarongray/northwind-rails ported to postgres.

### To run

Clone the repo
cd into the directory
bundle install
rake db:create && rake db:migrate && rake db:seed
rails s

Point browser at http://localhost:3000/