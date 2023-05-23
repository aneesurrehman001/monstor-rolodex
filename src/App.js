import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  // useState() gives us back an array of two values fist value is the value we want to store and the second value is going to be a set of a function.
  console.log("rendering");
  const [serchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log({ serchField });

  useEffect(() => {
    //console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => {
        setMonsters(monsters);
      });
  }, []);

  const onSearchChange = (event) => {
    console.log("onSearchChange function called");
    const serchFieldString = event.target.value.toLowerCase();
    setSearchField(serchFieldString);
  };
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(serchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, serchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monstors Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
