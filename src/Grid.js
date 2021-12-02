import React from "react";
import { PokemonName, Trailer } from "./App";

const Grid = ({ data }) => (
  <table>
    <thead>
      <tr>
        {Object.keys(data[0]).map(
          (
            header // get an array of key-names for the headers
          ) => (
            <th>{header}</th>
          )
        )}
      </tr>
    </thead>
    <tbody>
      {data &&
        data.map(
          (
            object // creating a table-row for every object in the array :
          ) => (
            <tr>
              {Object.keys(object).map(
                (
                  key // creating a table-data for every key in the object accordingly :
                ) => (
                  <td>
                    {JSON.stringify(Object.keys(object)) ===
                      JSON.stringify(["number", "name", "url"]) &&
                    key === "name" ? (
                      // textTransform: "capitalize" by PokemonName-component :
                      <PokemonName data={object[key]}></PokemonName>
                    ) : (
                      ""
                    )}
                    {typeof object[key] === "object" && object[key] !== null ? (
                      // using Trailer-component as a table cell :
                      <Trailer data={object[key]}></Trailer>
                    ) : (
                      (key !== "name" && object[key]) ||
                      (JSON.stringify(Object.keys(object)) !==
                        JSON.stringify(["number", "name", "url"]) &&
                        object[key])
                    )}
                  </td>
                )
              )}
            </tr>
          )
        )}
    </tbody>
  </table>
);

export default Grid;
