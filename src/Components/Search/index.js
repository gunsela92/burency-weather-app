import React from 'react';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchArea = ({handleFormSubmit}) => {
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group>
        <Form.Label>Search Location:</Form.Label>
        <Form.Control type="text" name="search-query" required />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Search
      </Button>
    </Form>
  );
};

SearchArea.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired
};

export default SearchArea;
