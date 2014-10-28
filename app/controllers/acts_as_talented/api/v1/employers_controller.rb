require_dependency "acts_as_talented/application_controller"

module ActsAsTalented
  class Api::V1::EmployersController < Api::ApiController
    before_filter :authenticate_employer!
    before_filter :get_employer, only: [:update]
    respond_to :json

    def index
      respond_with Employer.all.to_json
    end

    def update
    	if @employer.update_attributes(update_params)
	      render json: { status: "success" }
	    else
	      render json: { status: "failure", error: employer.errors.full_messages.join(",") }
	    end
    end

    private

    def get_employer
    	@employer = Employer.find(params[:id])
    end

    def update_params
    	params.require(:employer).permit(:name)
    end
  end
end