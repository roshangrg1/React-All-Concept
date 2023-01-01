
import './App.css';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import Cardusingprop from './Component/Cardusingprop';
import Counter from './Component/Counter';
import CardUseEffect from './Component/CardUseEffect';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [details, setDetails]= useState({})
  const fetchDetails = async ()=>{    //async as database is another continent.
    const {data}=await axios.get("https://randomuser.me/api/") // axios rule 
    // console.log(data);
   const mydetails= data.results[0] // ftching from that link and both details are different.
   setDetails(mydetails)  // done to use as props.
   console.log(mydetails);
  }
useEffect(() => {
  fetchDetails()
}, [])


  return (
    <div className="App">
      <Navbar/>
      <div style={{display:"flex" ,gap:"10px"}}>
      <Card/>

      <Cardusingprop button="love" height="200px" name="spiderman" imgUrl="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" width="18rem" para="Spider man has the power to climp and do anything he want using his power."/>
      <Cardusingprop button="love" height="200px" name="spiderman" imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Thanos_Infinity_4.png/220px-Thanos_Infinity_4.png" width="18rem" para="Spider man has the power to climp and do anything he want using his power."/>
      <Cardusingprop button="love" height="200px" name="spiderman" imgUrl="https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg" width="18rem" para="Spider man has the power to climp and do anything he want using his power."/>
      <Cardusingprop button="love" height="200px" name="Ironman" imgUrl="https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg" width="18rem" para="Iron Man is a 2008 American superhero film based on the Marvel Comics character of the Marvel"/>


      </div>
      <Counter/>
      <CardUseEffect details={details}/>
    </div>
  );
}

export default App;
