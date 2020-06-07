import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {deleteTech} from '../../actions/techAction'
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({tech, deleteTech}) => {
  const onDeleteTech = () => {
    deleteTech(tech.id);
    M.toast({html: 'Log deleted'})
  }
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i onClick={onDeleteTech} className="material-icons gray-text"> delete </i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
}

export default connect(null, {deleteTech})(TechItem);
