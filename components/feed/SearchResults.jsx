import React from 'react';
import { connect } from 'react-redux';
import { Row, Center } from '../../styled/components';
import ResultItem from './ResultItem';

function SearchResultsComponent({ searchResults }) {
  const resultList = searchResults.map((result) => <ResultItem key={result._id} result={result} />);
  return (
    <Row>
      <Center>
        {resultList}
      </Center>
    </Row>
  );
}

function mapStateToProps(store) {
  return {
    searchResults: store.searchResults,
  };
}

const SearchResults = connect(mapStateToProps)(SearchResultsComponent);

export default SearchResults;
