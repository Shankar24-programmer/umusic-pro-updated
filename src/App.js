import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carding from '../src/components/Carding'
import Sidebar from '../src/components/Sidebar'
import Applications from '../src/components/Applications'
import ShopifyStores from '../src/components/Shopify'
import Authentication from '../src/components/Authentication'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddnewApp from '../src/components/AddnewApp'
import Providers from './components/Providers'
function App() {
  return (
    <div className="App">
      <Router>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Carding/>}/>
      <Route path='/applications' element={<Applications/>}/>
      <Route path='/applications/addnew' element={<AddnewApp/>}/>
      <Route path='/shopifystores' element={<ShopifyStores/>}/>
      <Route path='/authenticationproviders' element={<Authentication/>}/>
      <Route path='/providers' element={<Providers/>}/>
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
