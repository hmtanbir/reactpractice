class Customer < ApplicationRecord
    validates_presence_of :name, :city, :mobile
end
