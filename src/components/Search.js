import React, { useState } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  padding: 1rem;
  margin-left: 150px; // Adjusted to match sidebar width
  margin-top: 60px; // To account for the fixed header
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement search logic here
  };

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="Search colors..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </SearchWrapper>
  );
}

export default Search;