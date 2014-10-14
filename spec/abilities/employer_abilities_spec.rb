require 'spec_helper'
require "cancan/matchers"

module ActsAsTalented
	describe Employer do
	  describe 'abilities' do
	  	# let(:chapter) { FactoryGirl.create(:chapter) }
	    let(:employer) { FactoryGirl.create(:acts_as_talented_employer) }
	    # let(:ability) { FactoryGirl.create(:user, chapter: chapter) }

	    subject(:ability) { Ability.new(employer) }

	    it { should be_able_to :read, Employer.new }
	    # it { should_not be_able_to :update, Employer.new }
	    # it { should_not be_able_to :delete, Employer.new }

	  end
	end
end