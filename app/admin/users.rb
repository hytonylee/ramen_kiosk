ActiveAdmin.register User do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
permit_params :email, :password, :password_confirmation

index :title => "Ramen Kiosk" do
  selectable_column
  id_column
  column :email
  column :first_name
  column :last_name
  column :current_sign_in_at
  column :sign_in_count
  column :created_at
  actions
end

filter :email
filter :current_sign_in_at
filter :sign_in_count
filter :created_at

form do |f|
  f.inputs do
    f.input :first_name
    f.input :last_name
    f.input :email
    f.input :password
    f.input :password_confirmation
  end
  f.actions
end


  permit_params :first_name, :last_name, :email, :password
end
