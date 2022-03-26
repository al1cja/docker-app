import React from 'react';
import styled from 'styled-components';

const TimelineItemWrapper = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width: 80%;
    margin: 5px 0;
    padding: 5px;
`;

const TimelineItemDetails = styled.div`
    display: flex;
    justify-content: space-between
`;

const TimelineItem = ({ name, category, price, date}) => (
    <TimelineItemWrapper>
        <div>{date}</div>
        <div>{category}</div>
        <TimelineItemDetails>
            <span>{name}</span>
            <span>{price}$</span>
        </TimelineItemDetails>
    </TimelineItemWrapper>
)

export default TimelineItem;
