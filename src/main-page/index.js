import { useEffect, useState, useMemo } from 'react';
import './main-page.css';
import Header from './header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/houseFromQuery';

function App() {
  const [allHouses, setAllHouses] = useState([]);
  // useEffect takes two params - a function and array of props second argument will allow useEffect to run whenever the state of a prop changes. Passing in an empty array will ensure useEffect only runs once
  useEffect(() => {
    const fetchHouses = async() => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
    <div className="container">
      <Header subtitle="Providing houses all over the world"/>
      <HouseFilter allHouses={allHouses}/>
      <Switch>
        <Route exact path="/">
          <FeaturedHouse house={featuredHouse}></FeaturedHouse>
        </Route>
        <Route path="/searchresults/:country">
          <SearchResults allHouses={allHouses}/>
        </Route>
        <Route path="/house/:id">
          <HouseFromQuery allHouses={allHouses} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
