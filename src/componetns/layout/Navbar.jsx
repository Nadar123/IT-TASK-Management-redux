import React, {useRef} from 'react'
import {connect} from 'react-redux';
import {searchLogs} from '../../actions/logAction';
import PropTypes from 'prop-types';


const Navbar = ({searchLogs}) => {
  const text = useRef('');

  const onChangeHandle = e => {
    searchLogs(text.current.value);
  }

  return (
    <nav style={{ marginBottom: '2rem' }} className="blue">
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input 
            ref={text}
            onChange={onChangeHandle}
            id="search" 
            type="search" 
            required
          />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}

export default connect(null, {searchLogs}) (Navbar);
