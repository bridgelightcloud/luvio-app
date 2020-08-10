import React from 'react';
import { SafeAreaView, ScrollView } from '../styled/components';
import SearchForm from '../components/feed/SearchForm';
import SearchResults from '../components/feed/SearchResults';

function FeedScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <SearchForm />
        <SearchResults />
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
