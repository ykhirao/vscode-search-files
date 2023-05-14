# rubocop:disable all

# When you are not satisfied with a candidate
# for using the method jump (`editor.action.goToReferences`)

# ❌ BAD
# Method jumping requires the installation of extensions
# such as Ruby Solargraph and PHP Intelephense
# and a local execution environment.

# ⭕ GOOD
# This extension is computed in JavaScript on VSCode,
# so no local installation is required.

# Examples ...
# Try clicking on it or something.

# ❌ Clicking on "Users" will give you 2 choices
# ❌ Clicking on "get_all" will give you 3 choices
# ⭕ Select `API::V1::Users` and use this extensions, search `APIV1Users` files.

API::V1::Users.new.get_all
API::V2::Users.new.get_all
API::V1::Customers.new.get_all
API::V2::Customers.new.get_all
