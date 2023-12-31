
import './index.css';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';


function App() {
  return (
   

<BrowserRouter>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/dashboard' element={<DashboardPage/>}/>
 <Route path='/coin/:id' element={<CoinPage/>}/>
<Route path='/compare' element={<ComparePage/>}/>
{/*<Route path='/watchlist' element={<WatchlistPage/>}/> */}


</Routes>
</BrowserRouter>
   
  );
}

export default App;
