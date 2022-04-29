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
import AddnewShop from './components/AddnewShop';
import AddnewAuth from './components/AddnewAuth'
import AddnewPro from './components/AddnewPro';
import ViewallApp from './components/ViewallApp';
import ViewallShop from './components/ViewallShop'
import ViewallAuth from './components/ViewallAuth'
import ViewallPro from './components/ViewallPro'
function App() {
  return (
    <div className="App">
      <Router>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Carding/>}/>
      <Route path='/dashboard' element={<Carding/>}/>
      <Route path='/applications' element={<Applications/>}/>
      <Route path='/applications/addnew' element={<AddnewApp/>}/>
      <Route path='/applications/viewall' element={<ViewallApp/>}/>
      <Route path='/shopifystores' element={<ShopifyStores/>}/>
      <Route path='/shopifystores/viewall' element={<ViewallShop/>}/>
      <Route path='/shopifystores/addnew' element={<AddnewShop/>}/>
      <Route path='/authenticationproviders' element={<Authentication/>}/>
      <Route path='/authenticationproviders/viewall' element={<ViewallAuth/>}/>
      <Route path='/authenticationproviders/addnew' element={<AddnewAuth/>}/>
      <Route path='/providers' element={<Providers/>}/>
      <Route path='/providers/addnew' element={<AddnewPro/>}/>
      <Route path='/providers/viewall' element={<ViewallPro/>}/>
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
