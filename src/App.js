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
import NewShop from './components/NewShop'
import NewApp from './components/NewApp'
import NewAuth from './components/NewAuth'
import NewPro from './components/NewPro'
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
      <Route path='/applications/newapp' element={<NewApp/>}/>
      <Route path='/applications/viewall/:id' element={<ViewallApp/>}/>
      <Route path='/shopifystores' element={<ShopifyStores/>}/>
      <Route path='/shopifystores/newshop' element={<NewShop/>}/>
      <Route path='/shopifystores/viewall/:id' element={<ViewallShop/>}/>
      <Route path='/shopifystores/addnew' element={<AddnewShop/>}/>
      <Route path='/authenticationproviders' element={<Authentication/>}/>
      <Route path='/authenticationproviders/viewall/:id' element={<ViewallAuth/>}/>
      <Route path='/authenticationproviders/addnew' element={<AddnewAuth/>}/>
      <Route path='/authenticationproviders/newauth' element={<NewAuth/>}/>
      <Route path='/providers' element={<Providers/>}/>
      <Route path='/providers/addnew' element={<AddnewPro/>}/>
      <Route path='/providers/newpro' element={<NewPro/>}/>
      <Route path='/providers/viewall/:id' element={<ViewallPro/>}/>
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
