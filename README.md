#Angular on northwind data

A simple angular front-end to an API over the old microsoft northwind database. The rails app is a slightly modified version of https://github.com/aarongray/northwind-rails ported to postgres.

The angular part is under app/assets/javascripts.

### To run

Clone the repo
cd into the directory
bundle install
rake db:create && rake db:migrate && rake db:seed
rails s

Point browser at http://localhost:3000/	