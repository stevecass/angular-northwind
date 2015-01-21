class Api::OrdersController < ApplicationController

  # GET /api/orders
  def index
    @orders = Order.all
    render :json => @orders
  end

  # GET /api/orders/:id
  def show
    @order = Order.find(params[:id])
    render :json => @order
  end

  def for_product
    @orders = Order.joins(:order_details).where(order_details: {product_id: params[:pid]})
    render :json => @orders
  end

end
