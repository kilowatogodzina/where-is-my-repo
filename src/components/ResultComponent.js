import React from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
`;

const SingleResult = styled.div`
  width: 40%;
  margin: 1rem;
  background-color: white;
  border: 1px solid;
  padding: 1rem;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

class Results extends React.Component {
  render() {
    let { results, onChooseResult } = this.props;

    return (
      <>
        <ResultWrapper>
          {results.map((result, index) => (
            <SingleResult
              key={`${result.name}_${index}`}
              onClick={() => onChooseResult(result)}
            >
              <div>{result.name}</div>
              <div>{result.owner.login}</div>
              <div>{result.stargazers_count}</div>
              <div>{result.language}</div>
            </SingleResult>
          ))}
        </ResultWrapper>
      </>
    );
  }
}

export default Results;
