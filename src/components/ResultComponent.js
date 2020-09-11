import React from 'react';
import styled from 'styled-components';
import SingleResult from '../components/SingleResultComponent'

const ResultWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
`;

class Results extends React.Component {
  render() {
    let { results, onChooseResult } = this.props;

    return (
      <>
        <ResultWrapper>
          {results.map((result, index) => (
            <SingleResult
              result={result}
              key={`${result.name}_${index}`}
              onChooseResult={() => onChooseResult(result)}
            />
          ))}
        </ResultWrapper>
      </>
    );
  }
}

export default Results;
