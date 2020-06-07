import React, {useEffect, Fragment} from 'react';
import Navbar from './componetns/layout/Navbar';
import Logs from './componetns/logs/Logs';
import {AddBtn} from './componetns/layout/AddBtn'
import AddLogModal from './componetns/logs/AddLogModal';
import EditLogModal from './componetns/logs/EditLogModal';
import AddTechModal from './componetns/techs/AddTechModal';
import TechListModal from './componetns/techs/TechListModal'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider} from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <Navbar/>
        <div className="container">
          <AddBtn/>
          <AddLogModal/>
          <EditLogModal/>
          <AddTechModal/>
          <TechListModal/>
          <Logs/>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
