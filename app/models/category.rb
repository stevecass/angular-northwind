class Category < ActiveRecord::Base

  has_many :products

  def self.empty
    Category.includes(:products).where(:products => { :id => nil })
  end

  def self.non_empty
    Category.includes(:products)
  end

end
