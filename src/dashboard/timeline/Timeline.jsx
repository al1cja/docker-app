import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import TimelineItem from './TimelineItem';
import TimelineChart from './TimelineChart';

const TimelineWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`
const Timeline = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => data.expense.sort((a, b) => 
                a.date - b.date
            ))
            .then(data => setData(data))
    }, [])

    const isLoading = !data || data.length < 1;

    return (
        <TimelineWrapper>
            <TimelineChart />
            <h2>Timeline</h2>
            {!isLoading && data.map(expense => (
                <TimelineItem
                    key={expense.id}
                    name={expense.name}
                    category={expense.category}
                    price={expense.price}
                    date={expense.date}
                />
            ))}
        </TimelineWrapper>
    )
}

export default Timeline;