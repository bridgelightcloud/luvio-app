import React, { useState } from 'react';
import {
  Center, Button, Row, Text,
} from '../../styled/components';
import TextInput from '../../styled/components/TextInput';
import util from '../../utilities';

function SearchForm() {
  const [query, setSearch] = useState('');

  async function sendSearch() {
    if (query) {
      const results = [];
      const events = await util.Models.Event.search({ query });
      if (events.success) {
        results.push(...events.data);
      }
      const accounts = await util.Models.Account.search({ query });
      if (accounts.success) {
        results.push(...accounts.data);
      }
      results.sort((a, b) => b.confidenceScore - a.confidenceScore);
      util.Actions.setSearchResults(results);
    }
  }

  return (
    <Row>
      <Center>
        <TextInput
          onChangeText={setSearch}
          value={query}
          // placeholder="search term"
        />
        <Button onPress={sendSearch}>
          <Center>
            <Text Dark>Search</Text>
          </Center>
        </Button>
      </Center>
    </Row>
  );
}

export default SearchForm;
