import logo from './logo.svg';
import './App.css';
import {CountryDetails, Navbar} from './components';
import {Routes, Route} from 'react-router-dom';
import { CountriesList } from './components';



function App() {
  // not needed as it is declared through props
  //const [countryData, setCountryData] = useState(countriesData);
  
  return (
    <div className="App">
<Navbar />
<div className="container">
<Routes>
  <Route path="/countrieslist" element={<CountriesList />} />
  <Route path="/:id" element={<CountryDetails />} />
</Routes>
</div>
    </div>
  );
}

export default App;
