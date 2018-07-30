import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      rating
      language
      title
      summary
      medium_cover_image
    }
  }
`;
