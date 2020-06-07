/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import {addTech} from '../../actions/techAction';
import PropTypes from 'prop-types';


const AddTechModal = ({addTech}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onsubmit = () => {
    if(firstName === '' || lastName === '') {
      M.toast({html: `${firstName} ${lastName} was added to the list`})
    }
    else {
      addTech({
        firstName,
        lastName
      })
      setFirstName('');
      setLastName('');
    }
  }

  return (
    <div id="add-tech-modal" className="modal" >
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="firstname" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstname" className="active">
              First Name  
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastname" className="active">
              Last Name  
            </label>
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
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, {addTech})(AddTechModal);