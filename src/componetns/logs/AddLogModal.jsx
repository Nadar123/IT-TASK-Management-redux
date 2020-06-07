/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import {addLogs} from '../../actions/logAction';

import SelectTechOption from '../techs/SelectTechOption'

const AddLogModal = ({addLogs}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onsubmit = () => {
    if(message === '' || tech === '') {
      M.toast({html: 'Please enter a message and tech'})
    }
    else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      }
      addLogs(newLog);
      M.toast({html: `Log Added by ${tech}`})

      setMessage('');
      setTech('');
      setAttention(false);
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Create your message   
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select 
              onChange={(e) => setTech(e.target.value)} 
              name="tech" 
              value={tech} 
              className="browser-default">
                <SelectTechOption />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input 
                id="indeterminate-checkbox" 
                type="checkbox" 
                checked={attention}
                value={attention}
                onChange={ e => setAttention(!attention)}
                />
                <span> Need attenton </span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a 
          href="#!" 
          onClick={onsubmit} 
          className="modal-close waves-effect blue btn"
        >Enter</a>
      </div>
    </div>
  )
}
const modalStyle = {
  width: '75%',
  height: '75%'
}

AddLogModal.propTypes = {
  addLogs: PropTypes.func.isRequired,

}


export default connect(null, {addLogs})(AddLogModal);