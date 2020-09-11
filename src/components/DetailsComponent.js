import React from 'react';
import styled from 'styled-components';
import SingleResult from '../components/SingleResultComponent';

const PopupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const PopupContent = styled.div`
  width: 450px;
  max-width: 80%;
  max-height: 80%;
  background-color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

const PopupButton = styled.button`
  background: #1ba98f;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  width: 150px;
  margin: 1rem 0;
  min-height: 30px;
  border-radius: 5px;
`;

class Details extends React.Component {
  render() {
    let { result, onClosePopup } = this.props;

    return (
      <>
        <PopupWrapper>
          <PopupContent>
            <SingleResult result={result} isFromDetails={true} />

            <PopupButton onClick={onClosePopup}>Close</PopupButton>
          </PopupContent>
        </PopupWrapper>
      </>
    );
  }
}

export default Details;
