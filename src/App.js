import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import HomeDetailPage from './pages/HomeDetailPage/HomeDetailPage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          {/* <Route path='/homedetailpage/:homeID' element={<HomeDetailPage />} /> */}
          <Route path='/homedetailpage/' element={<HomeDetailPage />} />
          <Route path='/seeallcities/' element={<SeeAllCitiesPage />} />
          <Route path='/citydetailspage/' element={<CityDetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
