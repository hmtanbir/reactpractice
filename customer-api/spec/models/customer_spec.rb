require 'rails_helper'

RSpec.describe Customer, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:city) }
  it { should validate_presence_of(:mobile) }
end
