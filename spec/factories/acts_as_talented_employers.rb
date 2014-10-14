# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
	sequence :user_email do |n|
    "user-mail-#{n}@example.com"
  end

  factory :acts_as_talented_employer, :class => 'ActsAsTalented::Employer' do
  	email { generate :user_email }
    password "12345678"
  end
end
