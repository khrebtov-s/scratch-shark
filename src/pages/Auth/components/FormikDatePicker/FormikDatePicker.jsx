import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';
import PropTypes from 'prop-types';

// Browser-compatible datepicker for DoB
const FormikDatePicker = (props) => {
  const {
    values,
    setFieldValue,
    setFieldTouched,
  } = props;

  return (
    <React.Fragment>
      <DatePicker
        onBlur={() => {
          setFieldTouched('dateOfBirth', true);
        }}
        name="dateOfBirth"
        selected={null}
        value={values.dateOfBirth}
        placeholderText="Date of Birth"
        autoComplete="off"
        onChangeRaw={(e) => {
          e.preventDefault();
        }}
        customInput={<CustomInput />}
        disabledKeyboardNavigation
        onChange={(e) => {
          setFieldValue('dateOfBirth', moment(e).format('MM/DD/YYYY'));
        }}
        dateFormat="MM/DD/YYYY"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        withPortal
        minDate={moment()
          .subtract(100, 'year')
          .toDate()}
        maxDate={moment().toDate()}
      />
    </React.Fragment>
  );
};
FormikDatePicker.propTypes = {
  values: PropTypes.shape({
    dateOfBirth: PropTypes.string,
  }).isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default React.memo(FormikDatePicker);

const CustomInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick, placeholder, value } = props;
  return (
    <input
      onClick={onClick}
      placeholder={placeholder}
      value={value}
      type="text"
      readOnly
    />
  );
};
