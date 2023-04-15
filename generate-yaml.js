const yaml = require('js-yaml');
const fs = require('fs');
require('dotenv').config()

const hasuraPathKey = `${process.env.HASURA_INTEGRATION_HOST}/${process.env.API_KEY}/v1/graphql`.replace(/(\r\n|\n|\r)/gm, "");
const hasuraObject =
{
  overwrite: true,
  schema: [
    {
      [hasuraPathKey]: {
        headers: { 'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`.replace(/(\r\n|\n|\r)/gm, "") }
      }
    }
  ],
  documents: './**/*.hasura.graphql',
  generates: {
    './libs/database/src/graphql.hasura.types.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true,
        strictScalars: true,
        scalars: {
          BigDecimal: 'string',
          BigInt: 'string',
          Bytes: 'string',
          DateTime: 'string',
          JSONObject: 'Record<string, unknown>',
          uuid: 'string',
          numeric: 'number',
          timestamptz: 'string',
          date:'string'
        },
        nonOptionalTypename: true,
        useTypeImports: true,
        inlineFragmentTypes: 'combine',
        exportFragmentSpreadSubTypes: true,
        useExplicitTyping: true
      }
    },
    './libs/database/src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: './graphql.hasura.types.ts',
        extension: '.operation.tsx',
        folder: 'operations'
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        defaultBaseOptions: { context: { clientName: 'hasura' } },
        avoidOptionals: true,
        onlyOperationTypes: true,
        strictScalars: true,
        scalars: {
          BigDecimal: 'string',
          BigInt: 'string',
          Bytes: 'string',
          DateTime: 'string',
          JSONObject: 'Record<string, unknown>',
          uuid: 'string',
          numeric: 'number',
          timestamptz: 'string',
          timetz: 'string',
          date:'string'

        },
        nonOptionalTypename: true,
        useTypeImports: true,
        inlineFragmentTypes: 'combine',
        exportFragmentSpreadSubTypes: true,
        useExplicitTyping: true,
        withRefetchFn: true,
        pureMagicComment: true
      }
    },
    './libs/database/src/graphql.hasura.helpers.ts': {
      plugins: [
        'named-operations-object',
        'typescript-apollo-client-helpers',
        'fragment-matcher'
      ],
      config: {
        useConsts: true,
        useTypeImports: true,
        requireKeyFields: true,
        requirePoliciesForAllTypes: true
      }
    },
    './graphql.hasura.schema.json': { plugins: ['introspection'] }
  }
}

// const graphObject =
// {
//   overwrite: true,
//   schema: `${process.env.GRAPH_MIDDLEWARE_HOST}/${process.env.API_KEY}/${process.env.GRAPH_MIDDLEWARE_PATH}`,
//   documents: './**/*.graph.graphql',
//   generates: {
//     './libs/database/src/graphql.graph.types.ts': {
//       plugins: [ 'typescript' ],
//       config: {
//         avoidOptionals: true,
//         strictScalars: true,
//         scalars: {
//           BigDecimal: 'string',
//           BigInt: 'string',
//           Bytes: 'string',
//           DateTime: 'string',
//           JSONObject: 'Record<string, unknown>'
//         },
//         nonOptionalTypename: true,
//         useTypeImports: true,
//         inlineFragmentTypes: 'combine',
//         exportFragmentSpreadSubTypes: true,
//         useExplicitTyping: true
//       }
//     },
//     './libs/database/src/': {
//       preset: 'near-operation-file',
//       presetConfig: {
//         baseTypesPath: './graphql.graph.types.ts',
//         extension: '.operation.tsx',
//         folder: 'operations'
//       },
//       plugins: [ 'typescript-operations', 'typescript-react-apollo' ],
//       config: {
//         avoidOptionals: true,
//         onlyOperationTypes: true,
//         strictScalars: true,
//         scalars: {
//           BigDecimal: 'string',
//           BigInt: 'string',
//           Bytes: 'string',
//           DateTime: 'string',
//           JSONObject: 'Record<string, unknown>'
//         },
//         nonOptionalTypename: true,
//         useTypeImports: true,
//         inlineFragmentTypes: 'combine',
//         exportFragmentSpreadSubTypes: true,
//         useExplicitTyping: true,
//         withRefetchFn: true,
//         pureMagicComment: true
//       }
//     },
//     './libs/database/src/graphql.graph.helpers.ts': {
//       plugins: [
//         'named-operations-object',
//         'typescript-apollo-client-helpers',
//         'fragment-matcher'
//       ],
//       config: {
//         useConsts: true,
//         useTypeImports: true,
//         requireKeyFields: true,
//         requirePoliciesForAllTypes: true
//       }
//     },
//     './graphql.graph.schema.json': { plugins: [ 'introspection' ] }
//   }
// }

const res1 = yaml.dump(hasuraObject);
// const res2 = yaml.dump(graphObject);

fs.writeFileSync('codegen-hasura.yml', res1, {encoding: 'utf8'})
// fs.writeFileSync('codegen-graph.yml', res2, {encoding: 'utf8'})
