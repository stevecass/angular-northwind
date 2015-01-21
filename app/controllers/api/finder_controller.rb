class Api::FinderController < ApplicationController

  # Because this is an API, we don't want to check for Rails' form auth token.
  skip_before_filter  :verify_authenticity_token


  def index
    # get 'find/:what/:from_field/:from_val/:exact' => 'finder#index', as: :find

    model = (params[:what]).classify.constantize
    field = (params[:from_field])
    val   = (params[:from_val])
    exact = (params[:exact])
    if exact.downcase == 't'
      items = model.where("#{field} = ?", val)
    else
      items = model.where("#{field} like ?", "%#{val}%")
    end

    render :json => items
  end

end
