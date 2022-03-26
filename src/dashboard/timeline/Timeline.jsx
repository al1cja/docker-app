import React from 'react';
import styled from 'styled-components';

import TimelineItem from './TimelineItem';

const TimelineWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

// ['Housing', 'Transportation', 'Food', 'Utilities', 'Medical & Healthcare', 'Entertainment', 'Clothes', 'Other']
const data = [
    {
        name: 'Mortage',
        category: 'Housing',
        price: '2000',
        date: '2022-03-01'
    },
    {
        name: 'Train ticket',
        category: 'Transportation',
        price: '50',
        date: '2022-03-02'
    },
    {
        name: 'Groceries',
        category: 'Food',
        price: '100',
        date: '2022-03-05'
    },
    {
        name: 'New T-shirt',
        category: 'Clothes',
        price: '50',
        date: '2022-03-05'
    },
    {
        name: 'Electricity bills',
        category: 'Utilities',
        price: '100',
        date: '2022-03-10'
    }
]

const Timeline = () => {
    return (
        <TimelineWrapper>
            <h2>Timeline</h2>
            {data.map(element => (
                <TimelineItem 
                    name={element.name}
                    category={element.category}
                    price={element.price}
                    date={element.date}
                />
            ))}
        </TimelineWrapper>
    )
}

export default Timeline;