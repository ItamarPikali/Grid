import React from "react";
import Grid from "./Grid";
import movies from "./data_a";
import pokemon from "./data_b";
import heroes from "./data_c";
// if you want to make sure that everything works properly uncomment the last Grid below

export const Trailer = ({ data }) => <a href={data.url}>click for trailer</a>;

export const PokemonName = ({ data }) => (
  <span style={{ textTransform: "capitalize" }}>{data}</span>
);

const App = () => (
  <div>
    <h2>Movies</h2>
    <Grid data={movies} />

    <h2>Pokemon</h2>
    <Grid data={pokemon} />

    {/* <h2>Heros</h2>
    <Grid data={heroes} /> */}
  </div>
);

export default App;
