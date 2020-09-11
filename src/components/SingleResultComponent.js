import React from 'react';
import styled from 'styled-components';
import Star from './svg/StarComponent';
import Link from './svg/LinkComponent';
import Fork from './svg/ForkComponent';
import Eye from './svg/EyeComponent';

const ResultCard = styled.div`
  width: ${(props) => (props.isFromDetails ? '100%' : '250px')};
  margin: ${(props) => (props.isFromDetails ? '0' : '0.5rem')};
  border: ${(props) => (props.isFromDetails ? 'none' : '1px solid')};
  padding: ${(props) => (props.isFromDetails ? '0' : '1rem')};
  box-shadow: ${(props) =>
    props.isFromDetails ? 'none' : '0 2px 2px 0 rgba(0, 0, 0, 0.5)'};
  cursor: ${(props) => (props.isFromDetails ? 'normal' : 'pointer')};
  max-width: 100%;
  background-color: white;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .repository {
    &-name {
      font-size: 1.5rem;
      font-weight: bold;
      display: ${(props) => (props.isFromDetails ? 'flex' : 'block')};
      width: 100%;
      align-items: center;
      justify-content: space-between;
      word-break: break-all;
    }

    &-owner {
      font-size: 0.8rem;
    }

    &-details {
      display: flex;
      justify-content: ${(props) =>
        props.isFromDetails ? 'flex-start' : 'space-between'};
      width: 100%;
      margin: 0.5rem 0;
    }

    &-stars,
    &-watchers,
    &-forks {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: ${(props) =>
        props.isFromDetails ? '0.5rem 0.5rem 0.5rem 0rem' : '0.5rem 0'};

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

    &-description {
      margin: 0.5rem 0;
    }
  }
`;

class SingleResult extends React.Component {
  render() {
    let { result, onChooseResult, isFromDetails } = this.props;

    if (isFromDetails) {
      return (
        <>
          <ResultCard isFromDetails>
            <div className={'repository-name'}>
              <div>{result.name}</div>
              <Link link={result.html_url} />
            </div>
            <div className={'repository-owner'}>{result.owner.login}</div>

            <div className={'repository-details'}>
              <div className={'repository-stars'}>
                <Star />
                <div className={'repository-stars__number'}>
                  {result.stargazers_count}
                </div>
              </div>

              <div className={'repository-watchers'}>
                <Eye />
                <div className={'repository-watchers__number'}>
                  {result.watchers_count}
                </div>
              </div>

              <div className={'repository-forks'}>
                <Fork />
                <div className={'repository-forks__number'}>
                  {result.forks_count}
                </div>
              </div>
            </div>

            <div className={'repository-description'}>{result.description}</div>
            {result.language && (
              <div className={'repository-language'}>{result.language}</div>
            )}
          </ResultCard>
        </>
      );
    }

    return (
      <>
        <ResultCard onClick={() => onChooseResult(result)}>
          <div className={'repository-name'}>
            <div>{result.name}</div>
          </div>
          <div className={'repository-owner'}>{result.owner.login}</div>

          <div className={'repository-details'}>
            <div className={'repository-stars'}>
              <Star />
              <div className={'repository-stars__number'}>
                {result.stargazers_count}
              </div>
            </div>

            {result.language && (
              <div className={'repository-language'}>{result.language}</div>
            )}
          </div>
        </ResultCard>
      </>
    );
  }
}

export default SingleResult;
