import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,} from 'react-router-dom'
import Dashboard from './components/dashboardComponents/Dashboard';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import PrivateRoutes from './components/PrivateRoutes';




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<PrivateRoutes render={(username)=><Dashboard username={username} />}/>} />
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
