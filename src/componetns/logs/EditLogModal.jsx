
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import {updateLog} from '../../actions/logAction';

import SelectTechOption from '../techs/SelectTechOption'


const EditLogModal = ({current, updateLog}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if(current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[current])

  const onsubmit = () => {
    if(message === '' || tech === '') {
      M.toast({html: 'Please enter a message and tech'})
    }
    else {
      const logUpdate = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      }
      updateLog(logUpdate);
      M.toast({html: `Log updated by ${tech}`})

      setMessage('');
      setTech('');
      setAttention(false);
    }
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Your Task </h4>
        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select 
              onChange={(e) => setTech(e.target.value)} 
              name="tech" 
              value={tech} 
              className="browser-default">
                <SelectTechOption/>
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
                <span> Need Attention </span>
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  current: state.log.current
})

export default connect(mapStateToProps, {updateLog})(EditLogModal);

