graphql-type-regexp
===

RegExp scalar type for [GraphQL.js](https://github.com/graphql/graphql-js).
Inspired by [`graphql-type-json`](https://github.com/taion/graphql-type-json).


Usage
---

In schema:

```graphql
scalar RegExp

# ...

type Query {
    things(filter: RegExp): [Thing!]
    # ...
  }
```

In resolvers:

```js
// when using babel
import GraphQLRegExp from 'graphql-type-regexp';

// otherwise
const GraphQLRegExp = require('graphql-type-regexp');
```

In queries / mutations:

```graphql
query {
  profiles(filter: "g.*b") {
    id
  }
}
```

The resolver will receive `new RegExp("g.*b")`, which is the same as `/g.*b/` (will match `github` and `gitlab`).

Example:

*   https://gitlab.com/kachkaev/website-graphql-server/blob/master/src/schema.js

*   https://gitlab.com/kachkaev/website-graphql-server/blob/master/src/resolvers.js
