import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './parts/Header';
import Footer from './parts/Footer';
import Sidebar from './parts/Sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="container">
      {/* <!-- header start --> */}
      <div className="row">
        <div className="col border border-primary">
          <Header />
        </div>
      </div>
      {/* <!-- header ends --> */}

      <div className="row">
        <div className="col-3 border border-primary">
          <Sidebar />
        </div>
        <div className="col border border-primary">
          <h1>This is home page</h1>
        </div>
      </div>

      <div className="row">
        <div className="col border border-primary">
          <Footer />
        </div>
      </div>
    </div>
    
  </>
);
