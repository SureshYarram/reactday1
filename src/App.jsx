import logo from './logo.svg';
import './App.css';
import { RestaurantDetails } from './Components/RestaurantDetails';
import { AddRestaurant } from './Components/AddRestaurant';
import { useState } from 'react';

function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div className="App">
    <button onClick={()=>setAuth(!auth)}>ADD RESTAURENT</button>
    {auth ? <AddRestaurant/> : <RestaurantDetails/>}

    </div>
  );
}

export default App;
