import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import HomeDetailCard from './components/HomeDetailCard/HomeDetailCard';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          {/* <Route path='/homedetailCard/:homeID' element={<HomeDetailCard />} /> */}
          <Route path='/homedetailCard/:homeID' element={<HomeDetailCard />} />
          <Route path='/seeallcities/' element={<SeeAllCitiesPage />} />
          <Route path='/seeallcities/:cityID' element={<SeeAllCitiesPage />} />
          <Route path='/citydetails/:cityID' element={<CityDetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
