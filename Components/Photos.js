import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
display: grid; 
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 1fr 1fr; 
grid-column-gap: 40px;
grid-row-gap: 40px; 

width: 90vw;
height: 90vh;
`;

const Photo = styled.img`
  max-width: 300px;
`;

const Photos = () => (
  <Wrapper>
    <Photo src="../assets/Photos/2018-07-15 10.52.59 1.jpg" />
    <Photo src="../assets/Photos/37940008.jpg" />
    <Photo src="../assets/Photos/Brighton-3815-25.jpg" />
    <Photo src="../assets/Photos/CaptureOne210.jpg" />
    <Photo src="../assets/Photos/JervisBay415.jpg" />
  </Wrapper>
);

export default Photos;