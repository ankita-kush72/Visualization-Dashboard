import "../static/css/Header.css";
import "../static/css/Footer.css";
import "../static/css/App.css";
import "../static/css/Home.css";
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Home from '../components/Common/Home';
import Layout from '../components/Common/Layout';







function App() {
  return (
    <Layout>
      <Home></Home>
    </Layout>
  );
};

export default App;
