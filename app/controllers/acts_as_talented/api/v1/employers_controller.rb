require_dependency "acts_as_talented/application_controller"

module ActsAsTalented
  class Api::V1::EmployersController < Api::ApiController
    before_filter :authenticate_employer!
    before_filter :get_employer, only: [:update]
    respond_to :json

    def index
      employers = Employer.paginate(page: params[:page] || 1 , per_page: params[:per_page] || 10)
      render json: [{ data: employers, count: Employer.all.size }], status: :ok
    end

    def update
    	if @employer.update_attributes(update_params)
	      render json: @employer, status: :ok
	    else
	      render json: { error: @employer.errors.full_messages.join(",") }, status: :unprocessable_entity
	    end
    end

    private

    def get_employer
    	@employer = Employer.find(params[:id])
    end

    def update_params
    	params.require(:employer).permit(:name, :contact_number)
    end
  end
end