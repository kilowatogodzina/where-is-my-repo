import React from 'react';
import styled from 'styled-components';
import Star from '../components/StarComponent';

const ResultWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem 0;
`;

const SingleResult = styled.div`
  width: 250px;
  max-width: 100%;
  margin: 0.5rem;
  background-color: white;
  border: 1px solid;
  padding: 1rem;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .repository {
    &-name {
      font-size: 1.5rem;
      font-weight: bold;
    }

    &-owner {
      font-size: 0.8rem;
    }

    &-stars {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.5rem 0;

      &__number {
        margin: 0 5px;
      }
    }

    &-language {
      border-radius: 25px;
      text-align: center;
      font-size: 0.9rem;
      align-self: flex-end;
      margin: 0.5rem 0;
      background: rgba(100, 201, 168, 0.5);
      padding: 0.5rem;
      min-width: 35px;
    }
  }
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
              <div className={'repository-name'}>{result.name}</div>
              <div className={'repository-owner'}>{result.owner.login}</div>
              <div className={'repository-stars'}>
                <Star />
                <div className={'repository-stars__number'}>{result.stargazers_count}</div>
              </div>

              {result.language && (
                <div className={'repository-language'}>{result.language}</div>
              )}
            </SingleResult>
          ))}
        </ResultWrapper>
      </>
    );
  }
}

export default Results;
