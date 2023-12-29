import { useEffect, useState } from 'react'
import data from "./datos.json";
import Filter from "./components/Filter.js";
import Card from "./components/Card.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/custom.scss';


function App() {

  const [filter, setFilter] = useState("None");
  const [entries, setEntries] = useState(Object.values(data));

  useEffect(() => {
    var interval = setInterval(() => {
      // adding  new entries  
      var newItem = Object.values(data).find((item) => filter == "None" ? !entries.includes(item) : !entries.includes(item) && item.nombre == filter)
      if (newItem != undefined) {
        entries.push(newItem)
        var newEntries = [...entries]
        setEntries(newEntries);
      }
      // delete wrong entries
      var deleteIndex = entries.findIndex((element) => (filter == "None" ? false : element.nombre != filter))
      if (deleteIndex >= 0) {
        entries.splice(deleteIndex, 1)
        var newEntries = [...entries]
        setEntries(newEntries);
      }

      // stop interval
      if (deleteIndex == -1 && newItem == undefined) {
        clearInterval(interval)
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    }

  },
    [filter]);

  return (
    <div className="container primary">
      <Filter onChange={(e) =>
        setFilter(e.target.value)} options={Object.values(data).map((object) => object.nombre)}></Filter>
      <div className="d-flex  justify-content-evenly " style={{"height":"90vh"}}>
        <div className="d-flex flex-column flex-wrap">
          {             
            entries.map((item) => <Card  nombre={item.nombre} rango={item.rango} mercados={item.tamano_market} > </Card>)
          }
        </div>
      </div>
    </div>
  )
}

export default App;