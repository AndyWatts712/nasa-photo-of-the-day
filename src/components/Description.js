import React from 'react';
import styled from 'styled-components';

const DescCard = styled.div`
    width: 66%;
    background-color: white;
    border: 1px solid black;
    margin: 20px auto;
    box-shadow:5px 10px;
`;

function Description(props) {
    return (
        <DescCard>
            <p>{props.nasaData}</p>
        </DescCard>
    )
    
}

export default Description;