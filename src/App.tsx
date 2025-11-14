// import { useReducer } from "react";
import { useState } from "react";

import "./App.css";
import CardList from "./components/CardList";
import FilterBox from "./components/FilterBox";
function App() {
  const [searchTags, setSearchTags] = useState<string[]>([]);

  return (
    <>
      <div className="header"></div>
      <main className="main">
        {searchTags.length > 0 && (
          <FilterBox searchTags={searchTags} setSearchTags={setSearchTags} />
        )}

        <CardList searchTags={searchTags} setSearchTags={setSearchTags} />
      </main>
    </>
  );
}

export default App;
