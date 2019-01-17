class CustomersController < ApplicationController
    before_action :set_customer, only:[:show, :update,:destroy]

    # GET /customers
    def index
        @customers = Customer.all
        json_response(@customers)
    end

    # POST/customers
    def create
      @customer = Customer.create!(customer_params)
      json_response(@customer, :created)    
    end

    # GET /customers/:id
    def show
        json_response(@customer)
    end    

    # PUT /customers/:id
    def update
        @customer.update(customer_params)
        head :no_content
    end
    
    # DELETE /customers/:id
    def destroy
        @customer.destroy
        head :no_content
    end

    private

    def customer_params
        # whitelist params
        params.permit(:name, :city, :mobile)
    end
    
    def set_customer
        @customer = Customer.find(params[:id])
    end    
end
