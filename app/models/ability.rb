# To create this file, run the command after installing `cancancan`:
# rails g cancan:ability

# Use this file to define a user's permission. What they
# can do with which models, etc.
class Ability
  include CanCan::Ability

  # When `can?` method is called, this class is instantiated with
  # current_user as user 👇 below. (i.e. Ability.new(current_user))
  def initialize(user)
    alias_action :create, :read, :update, :destroy, :to => :crud

    # Define abilities for the passed in user here. For example:
    #
    user ||= User.new # guest user (not logged in)
    if user.is_admin?
      can :manage, :all
    else
      can :read, :all
    end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

    # Example usage testing this rule:
    # can?(:manage, Question.last)
    can :crud, Menu do |menu|
      menu.user == user
    end

    can :like, Menu do |menu|
      menu.user != user
    end
  end
end
