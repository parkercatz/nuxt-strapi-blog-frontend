import gql from "graphql-tag";

export const allArticlesQuery = gql`
  query allArticlesQuery {
    articles {
      id
      body
      title
      date
      description
      slug
    }
  }
`;

export const singleArticleQuery = gql`
  query singleArticleQuery {
    article(id: 1) {
      id
      title
      date
      body
      description
      slug
    }
  }
`;
