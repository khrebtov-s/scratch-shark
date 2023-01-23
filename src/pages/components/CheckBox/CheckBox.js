import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from 'reactstrap';
import styles from './CheckBox.module.scss';

export default function CheckBox({ label, id, checked, onChange }) {
	return (
  <CustomInput
			label={label}
  className={styles.main}
  id={id}
  inline
  type="checkbox"
  color="success"
  onChange={onChange}
  checked={checked}
		/>
	);
}

CheckBox.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

CheckBox.defaultProps = {
	label: '',
	id: 'default-checkbox',
};
