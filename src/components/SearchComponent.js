import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 5px;
`;

const CustomInput = styled.input`
  min-height: 30px;
  margin: 0.5rem 0;
  font-size: 1rem;
  text-align: center;
  max-width: 90%;
  border: none;
  outline: none;
  width: 200px;
`;

const CustomButton = styled.button`
  background: #1ba98f;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  width: 60px;
`;

class SearchComponent extends React.Component {
  render() {
    let { onSearch, onKeyUpHandler } = this.props;

    return (
      <SearchWrapper>
        <CustomInput
          name='search'
          placeholder='Repository name...'
          onKeyUp={(event) => onKeyUpHandler(event)}
          autoFocus
        />

        <CustomButton onClick={onSearch}>Search</CustomButton>
      </SearchWrapper>
    );
  }
}

export default SearchComponent;
