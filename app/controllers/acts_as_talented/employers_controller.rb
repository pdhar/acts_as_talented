# require_dependency "acts_as_talented/application_controller"

# module ActsAsTalented
#   class EmployersController < ApplicationController
# 		before_action :authenticate_employer!

# 	  def index
# 	    authorize! :index, @employer, :message => 'Not authorized as an administrator.'
# 	    @employers = Employer.all
# 	  end

# 	  def show
# 	    @employer = Employer.find(params[:id])
# 	  end
	  
# 	  def update
# 	    authorize! :update, @employer, :message => 'Not authorized as an administrator.'
# 	    @employer = Employer.find(params[:id])

# 	    if @employer.update_attributes(params[:employer], :as => :admin)
# 	      redirect_to employers_path, :notice => "Employer updated."
# 	    else
# 	      redirect_to employers_path, :alert => "Unable to update employer."
# 	    end
# 	  end
	    
# 	  def destroy
# 	    authorize! :destroy, @employer, :message => 'Not authorized as an administrator.'
# 	    employer = Employer.find(params[:id])

# 	    unless employer == current_employer
# 	      employer.destroy
# 	      redirect_to employers_path, :notice => "Employer deleted."
# 	    else
# 	      redirect_to employers_path, :notice => "Can't delete yourself."
# 	    end
# 	  end
#   end
# end
