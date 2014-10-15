require 'populator'

desc "add sample employers"

task add_sample_employers: :environment do
  module ActsAsTalented
	  [Employer].each(&:delete_all)

	  e = Employer.new
	  e.name = "Pranav Dhar"
	  e.email = "pranav@test.com"
	  e.password = "password"
	  e.save!

	  Employer.populate(50) do |employer|

	    employer.name 							= Faker::Name.name
	    employer.email 							= Faker::Internet.email
	    employer.encrypted_password = "password"
	    employer.contact_number 		= (SecureRandom.random_number * 10000000).round
	    employer.sign_in_count			= 1
	    # Employer.bio = Populator.sentences(5..10)
	    # Employer.first_name = name.split(' ').first
	    # Employer.last_name =  name.split(' ').last
	    # Employer.location = Faker::Address.city + ', ' + Faker::Address.state #state_abbr      
	    # Employer.job = "Job"
	    # Employer.tag_line = Faker::Lorem.paragraph.first(30)
	  end
  end
end
