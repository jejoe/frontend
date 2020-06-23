import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateDeal from './components/create-deal/CreateDeal';
import EditDeal from './components/edit-deal/EditDeal';
import DeleteDeal from './components/delete-deal/DeleteDeal';
import DealsList from './components/deals-list/DealsList';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className='d-flex flex-column'>
          <div className='d-flex justify-content-between pr-5 pl-5 pt-3 pb-3' style={{ backgroundColor: 'alice', boxShadow: '0 1px 3px rgba(83,91,96,.23)' }}>
            <div className='d-flex'>
              <Link to='/' style={{ fontSize: '30px' }}>GO TO MARKET</Link>
            </div>
            <div className='d-flex'>
              <div className='d-flex'>
                <div className='mr-3'>
                  <Link to='/' style={{ fontSize: '20px' }}>Deals List</Link>
                </div>
                <div>
                  <Link to='/create' style={{ fontSize: '20px' }}>Create Deal</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='pr-5 pl-5'>
            <Route path='/' exact component={DealsList} />
            <Route path='/edit/:id' component={EditDeal} />
            <Route path='/delete/:id' component={DeleteDeal} />
            <Route path='/create' component={CreateDeal} />
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
