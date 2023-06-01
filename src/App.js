import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from './pages/ProductScreen';
//import Layout from 'Layout';
//pages
import Home from './pages/Home';
import Error from './pages/Error';

import Fotter from './components/Fotter';
import Navber from './components/Navber';
import SigninScreen from './pages/SigninScreen';
import Register from './pages/Register';
import Paymentinfo from './pages/Paymentinfo';
import History from './pages/History';
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';
import PostHistory from './pages/PostHistory';
import UserDeposit from './pages/UserDeposit';
import Withdraw from './pages/Withdraw';
import Faq from './pages/Faq';

function App() {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />

        {sessionStorage.getItem('userData') ? (
          ''
        ) : (
          <Route path="/register" element={<Register />} />
        )}

        {sessionStorage.getItem('userData') ? (
          ''
        ) : (
          <Route path="/login" element={<SigninScreen />} />
        )}

        {sessionStorage.getItem('userData') ? (
          <Route path="/dashboard/history" element={<History />} />
        ) : (
          ''
        )}

        {sessionStorage.getItem('userData') ? (
          <Route path="/Dashboard" element={<Dashboard />} />
        ) : (
          ''
        )}

        {sessionStorage.getItem('userData') ? (
          <Route path="dashboard/withdraw" element={<Withdraw />} />
        ) : (
          ''
        )}

        {sessionStorage.getItem('userData') ? (
          <Route path="dashboard/createpost" element={<CreatePost />} />
        ) : (
          ''
        )}

        {sessionStorage.getItem('userData') ? (
          <Route path="dashboard/deposit" element={<UserDeposit />} />
        ) : (
          ''
        )}

        {sessionStorage.getItem('userData') ? (
          <Route
            path="dashboard/createpost/posthistory"
            element={<PostHistory />}
          />
        ) : (
          ''
        )}

        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route path="/paymentinfo" element={<Paymentinfo />} />
        <Route path="/dashboard/faq" element={<Faq />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
