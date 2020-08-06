import React from "react";
import ReactDom from "react-dom";
import MovieCard from "./Customs/MovieCard";

import "./index.scss";

const App = () => {
  return (
    <div className="container ui stackable relaxed four column grid">
      <div className="column">
        <MovieCard
          title="Crash Landing on You"
          poster="Crash_Landing_on_You.jpg"
          genre="Romantic-drama"
          rating="9.6"
        />
      </div>
      <div className="column">
        <MovieCard
          title="Descendants of the Sun"
          poster="DescendantsoftheSun.jpg"
          genre="Romantic-drama"
          rating="9.6"
        />
      </div>

      <div className="column">
        <MovieCard
          title="Memories of the Alhambra"
          poster="Memories_of_the_Alhambra.jpg"
          genre="Romantic-drama"
          rating="9.6"
        />
      </div>

      <div className="column">
        <MovieCard
          title="Fight For My Way"
          poster="Fight_For_My_Way.jpg"
          genre="Romantic-drama"
          rating="9.6"
        />
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
