import graphresult from './graphql.graph.helpers';
import hasuraresult from './graphql.hasura.helpers';


export const hasuraPossibleTypes = {
  ...hasuraresult.possibleTypes,
  ...graphresult.possibleTypes,
};
