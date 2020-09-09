import React from 'react';
import styled from 'styled-components';
import { getRepos } from '../services/axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
    };
  }

  // TODO: debounce or cancel pending calls
  setSearch = (event) => {
    let query = event.target.value;
    let self = this;

    this.setState({ search: query }, () => {
      if (query.length < 3) {
        return;
      }

      getRepos(this.state.search).then((result) => {
        self.setState({
            results: result.items
        })
      });
    });
  };

  render() {
      let {search, results} = this.state;
    return (
      <>
        <input value={search} onChange={this.setSearch}></input>
        {results.map((result) => {
            return (<div>{result.name}</div>)
        })}
      </>
    );
  }
}

export default Search;
