import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./Queries";

import Movie from "./Movie";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>Loading...</span>;
      if (error) return <span>Failed</span>;
      if (data) {
        return data.movies.map(movie => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              img={movie.medium_cover_image}
            />
          );
        });
      }
    }}
  </Query>
);

export default Home;
