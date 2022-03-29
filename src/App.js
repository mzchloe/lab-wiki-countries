import logo from './logo.svg';
import './App.css';
import {Navbar} from './components';
import {Routes, Route} from 'react-router-dom';
import { CountriesList } from './components';
import countriesData from './countries.json'; 


function App() {
  // not needed as it is declared through props
  //const [countryData, setCountryData] = useState(countriesData);
  
  return (
    <div className="App">
<Navbar />
<div className="container">
<Routes>
  <Route path="/countrieslist" element={<CountriesList />} />
</Routes>
</div>
    </div>
  );
}

export default App;
