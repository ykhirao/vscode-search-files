# vscode-search-files

Use VSCode's quickOpen to access files immediately.

* [Source Code on GitHub](https://github.com/ykhirao/vscode-search-files)
* [Visual Studio | Marketplace](https://marketplace.visualstudio.com/items?itemName=ykhirao.vscode-search-files&ssr=false#overview)

## Common Usage

usage in Mac

* `Select the area` you wish to search
* `CMD + SHIFT + P` || `CMD + P` (Open QuickOpen) and Input `> Search Ruby Module`,
* Input `Search Ruby Module`
* Press `Enter` key

![ezgif-1-398dfba47d](https://github.com/ykhirao/vscode-search-files/assets/15008377/3171db17-c7cc-4c57-8d02-60d19faee5c5)


## Ruby Usage

### API::V1::Users.new

`API::V1::Users.new.get_all`

> Click `Users` vs using this extension

![ezgif-4-8d21eda43c](https://github.com/ykhirao/vscode-search-files/assets/15008377/06db62ca-e0f5-4c65-8ba4-9e22002803bd)

> Search modules

![ezgif-4-8d6993d0c7](https://github.com/ykhirao/vscode-search-files/assets/15008377/7504a4dc-264c-4b05-8382-e2fb5e58f6c8)

### SAMPLE Code

@see [Samples/Ruby](./samples/ruby/)

> Search Ruby Module

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

API::V1::Users.new.get_all
API::V2::Users.new.get_all
API::V1::Customers.new.get_all
API::V2::Customers.new.get_all
```

## Common Usage

> Change case and search

<img width="800" alt="" src="https://github.com/ykhirao/vscode-search-files/assets/15008377/0137838a-0a8d-4bd3-ac8a-d1a6375abb99">

![ezgif-4-e5bdb8af22](https://github.com/ykhirao/vscode-search-files/assets/15008377/9ae18891-cbff-4af3-b6a9-a49899e9d6d2)

### singularForm

Split words and make all words singular

`UsersDetails` → `UserDetail`

### pluralForm

Split words and make all words plural

`UserDetail` → `UsersDetails`

### commonPluralSingular

Searches for common word parts in singular and plural forms.
It is used when it is not clear whether the file name was created in the singular or plural form.

`AgencyDetail` → `AgencDetail`
`AgenciesDetails` → `AgencDetail`
`UsersDetails` → `UserDetail`
`UserDetail` → `UserDetail`

### and each case

The following cases are supported.

* camelCase
* capitalCase
* constantCase
* dotCase
* headerCase
* noCase
* paramCase
* pascalCase
* pathCase
* sentenceCase
* snakeCase

## Count

> SearchFiles: Get Word Count

A count of the number of characters in multibyte characters (Japanese like "日本語", pictographs🇯🇵, etc.).
Since JavaScript's standard length cannot count them, they are measured by Intl.Segmenter. This is a completely extra function.
