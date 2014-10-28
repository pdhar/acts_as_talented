require 'spec_helper'

module ActsAsTalented
  describe Api::V1::EmployersController do

    routes { ActsAsTalented::Engine.routes }

    shared_examples_for "any request" do
      context "CORS requests" do
        it "should set the Access-Control-Allow-Origin header to allow CORS from anywhere" do
          response.headers['Access-Control-Allow-Origin'].should == '*'
        end

        it "should allow general HTTP methods thru CORS (GET/POST/PUT/DELETE)" do
          allowed_http_methods = response.header['Access-Control-Allow-Methods']
          %w{GET POST PUT DELETE}.each do |method|
            allowed_http_methods.should include(method)
          end
        end

      end
    end

    describe "HTTP OPTIONS requests" do

      before do
        process :index, 'OPTIONS'
      end
      
      it_should_behave_like "any request"

      it "should be succesful" do
        response.should be_success
      end
    end 

    describe "when user is logged in" do
      
      let(:admin) { FactoryGirl.create(:acts_as_talented_employer) }
      let(:json) { ActiveSupport::JSON.decode(response.body) }

      before do
        sign_in admin
      end      

      it 'GET /api/v1/employers.json' do
        get :index, format: :json
        expect(json.count).to eq(1)
      end

      it 'PUT /api/v1/employers.json' do
        put :update, {:id => admin.to_param, :employer => { "name" => "Test Man" }}
        expect(admin.reload.name).to eq("Test Man")
      end
    end

  end
end