module ActsAsTalented
  class Employer < ActiveRecord::Base
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :trackable, :validatable

    attr_accessible :name, :contact_number, :password

    # Add address:text description:text domain_id:integer rating:integer registration_date:date
  end
end
