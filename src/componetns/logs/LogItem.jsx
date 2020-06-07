import React from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import {deleteLog, setCurrent} from '../../actions/logAction';



const LogItem = ({log, deleteLog, setCurrent}) => {

  const onDeleteLog = () => {
    deleteLog(log.id);
    M.toast({html: 'Log deleted'})
  }


  return (
    <li className="collection-item">
      <div>
        <a 
          href="#edit-log-modal" 
          className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
          onClick={() =>setCurrent(log)}
        >
          {log.message}
        </a>
        <br/>
        <span className="grey-text">
          <span className="black-text"> {log.id} </span>
          last updeted by{' '}
          <span className="black-text"> {log.tech} </span>
            on 
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a 
          onClick={onDeleteLog}
          href="#!" 
          className="secondary-content"
        > 
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}



export default connect(null, {deleteLog, setCurrent}) (LogItem);
