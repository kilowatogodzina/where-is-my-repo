import React from 'react';
import { getRepos } from '../services/axios';
import Results from '../components/ResultComponent';
import Details from '../components/DetailsComponent';
import styled from 'styled-components';

const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    };
  }

  setSearch = (event) => {
    let query = event.target.value;

    this.setState({ search: query });
  };

  search = () => {
    this.setState({
      isLoading: true
    })

    getRepos(this.state.search).then((result) => {
      this.setState({
        results: result.items,
        isLoading: false,
      });
    });
  };

  onChooseResult = (result) => {
    this.setState({
      chosenResult: result,
      isPopupOpen: true,
    });
  }

  onClosePopup = () => {
    this.setState({
      chosenResult: {},
      isPopupOpen: false,
    });
  }

  render() {
    let { search, results, isLoading, chosenResult, isPopupOpen } = this.state;

    return (
      <>
        <MainWrapper>
        <h1>Where is my repo?</h1>
        <input value={search} onChange={this.setSearch}></input>
        <button onClick={this.search}>Search</button>

        {isLoading && <div>Ładowanie...</div>}

        <Results results={results} onChooseResult={(result) => this.onChooseResult(result)}/>

        {isPopupOpen &&
        <Details result={chosenResult} onClosePopup={this.onClosePopup} />
        }

        </MainWrapper>
      </>
    );
  }
}

export default Search;
