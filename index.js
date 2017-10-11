const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

function identity(value) {
  return value;
}

function parseLiteral(ast) {
  switch (ast.kind) {
    case Kind.STRING:
      return new RegExp(ast.value);
    default:
      throw new Error(`Expected string, got ${ast.kind}`);
  }
}

module.exports = new GraphQLScalarType({
  name: 'RegExp',
  description: 'JS RegExp represented as string',
  serialize: identity,
  parseValue: identity,
  parseLiteral,
});
