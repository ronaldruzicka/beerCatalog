import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';

const ErrorMessage = (props) => {
  const { errorMessage, hideErrorMessage, loadBeers } = props;

  return (
    <Alert bsStyle="danger" onDismiss={hideErrorMessage}>
      <h4>{errorMessage}!</h4>
      <p>
        <Button bsStyle="danger" onClick={loadBeers}>Try again</Button>
        <span> or </span>
        <Button onClick={hideErrorMessage}>Hide Alert</Button>
      </p>
    </Alert>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  hideErrorMessage: PropTypes.func.isRequired,
  loadBeers: PropTypes.func.isRequired
};

export default ErrorMessage;
