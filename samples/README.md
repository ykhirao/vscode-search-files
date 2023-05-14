# Common

> Change case and search

<img width="800" alt="" src="https://github.com/ykhirao/vscode-search-files/assets/15008377/0137838a-0a8d-4bd3-ac8a-d1a6375abb99">

![ezgif-4-e5bdb8af22](https://github.com/ykhirao/vscode-search-files/assets/15008377/9ae18891-cbff-4af3-b6a9-a49899e9d6d2)

## singularForm

Split words and make all words singular

`UsersDetails` → `userdetail`

## pluralForm

Split words and make all words plural

`UserDetail` → `usersdetails`

## commonPluralSingular

Searches for common word parts in singular and plural forms.
It is used when it is not clear whether the file name was created in the singular or plural form.

`AgencyDetail` → `agencdetail`
`AgenciesDetails` → `agencdetail`
`UsersDetails` → `userdetail`
`UserDetail` → `userdetail`

# Ruby

```ruby
# samples/ruby/API/V1/Users.rb
module API
  module V1
    class Users
      def get_all
        # ...
      end
    end
  end
end

# samples/ruby/API/V2/Users.rb
module API
  module V2
    class Users
      def get_all
        # ...
      end
    end
  end
end

# samples/ruby/API/V1/Customers.rb
module API
  module V1
    class Customers
      def get_all
        # ...
      end
    end
  end
end

# samples/ruby/API/V2/Customers.rb
module API
  module V2
    class Customers
      def get_all
        # ...
      end
    end
  end
end
```

## examples

```ruby
API::V1::Users.new.get_all
API::V2::Users.new.get_all
API::V1::Customers.new.get_all
API::V2::Customers.new.get_all
```

### API::V1::Users.new

`API::V1::Users.new.get_all`

> Click `Users` vs using this extension

![ezgif-4-8d21eda43c](https://github.com/ykhirao/vscode-search-files/assets/15008377/06db62ca-e0f5-4c65-8ba4-9e22002803bd)

> Search modules

![ezgif-4-8d6993d0c7](https://github.com/ykhirao/vscode-search-files/assets/15008377/7504a4dc-264c-4b05-8382-e2fb5e58f6c8)
