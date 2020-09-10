import React from 'react';
import { getRepos } from '../services/axios';
import Results from '../components/ResultComponent';
import Details from '../components/DetailsComponent';
import Loader from '../components/LoaderComponent';
import SearchComponent from '../components/SearchComponent';

import styled from 'styled-components';

const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.h1`
  text-align: center;
`;

const Error = styled.div`
  text-align: center;
  margin: 1rem;
  color: red;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
      isLoading: false,
      chosenResult: {},
      isPopupOpen: false,
      error: '',
    };
  }

  search = () => {
    this.setState({
      isLoading: true,
      results: [],
      error: '',
    });

    getRepos(this.state.search)
      .then((result) => {
        this.setState({
          results: result.items,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.response.data.message,
          isLoading: false,
        });
      });
  };

  onChooseResult = (result) => {
    this.setState({
      chosenResult: result,
      isPopupOpen: true,
    });
  };

  onClosePopup = () => {
    this.setState({
      chosenResult: {},
      isPopupOpen: false,
    });
  };

  onKeyPressHandler = (event) => {
    let query = event.target.value;

    if (event.key === 'Enter') {
      this.search();
    } else {
      this.setState({ search: query });
    }
  }

  render() {
    let {
      results,
      isLoading,
      chosenResult,
      isPopupOpen,
      error,
    } = this.state;

    return (
      <>
        <MainWrapper>
          <Header>Looking for some repositories?</Header>

          <SearchComponent
            onSearch={(event) => this.search(event)}
            onKeyPressHandler = {(event) => this.onKeyPressHandler(event)}
          />

          {isLoading && <Loader />}

          {error && <Error>{error}</Error>}

          <Results
            results={results}
            onChooseResult={(result) => this.onChooseResult(result)}
          />

          {isPopupOpen && (
            <Details result={chosenResult} onClosePopup={this.onClosePopup} />
          )}
        </MainWrapper>
      </>
    );
  }
}

export default Search;
