[![Build Status](https://travis-ci.org/SWoskowiak/csvParseTest.svg?branch=master)](https://travis-ci.org/SWoskowiak/csvParseTest)

# csvParseTest
A simple example CSV parser that excepts a csv with newline seperations for each entry and builds a user store out of them

Even when given dirty input like:
```Javascript

const csv = `
  john,21,CA
  jane,30,NY
  mike,,
  badFields
  ,,,,,
  jake,1000,CA,Joe,100,VT
  jim,20,OR
`;

```

The internal store will look like:

```Javascript
[ { name: '  john', age: '21', location: 'CA' },
  { name: '  jane', age: '30', location: 'NY' },
  { name: '  jake', age: '1000', location: 'CA' },
  { name: '  jim', age: '20', location: 'OR' } ]
```
