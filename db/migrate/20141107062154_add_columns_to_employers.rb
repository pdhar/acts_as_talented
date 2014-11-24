class AddColumnsToEmployers < ActiveRecord::Migration
  def change
    add_column :acts_as_talented_employers, :address, :text
    add_column :acts_as_talented_employers, :description, :text
    add_column :acts_as_talented_employers, :domain_id, :integer
    add_column :acts_as_talented_employers, :rating, :integer
    add_column :acts_as_talented_employers, :registration_date, :date
  end
end
