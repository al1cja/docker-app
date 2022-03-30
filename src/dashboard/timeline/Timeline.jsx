import React from 'react';
import styled from 'styled-components';

import TimelineItem from './TimelineItem';
import TimelineChart from './TimelineChart';

const TimelineWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

const TimelineDetails = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: rgba(39, 53, 82, 0.05);
    background-color: #eef5ed;
    padding-top: 30px;

    h2 {
        font-size: 40px;
        margin-bottom: 50px;
        color: #273552;
    }
`

const Timeline = ({ data, isLoading }) =>  (
    <TimelineWrapper>
        {!isLoading && <TimelineChart expenseData={data} />}
        <TimelineDetails>
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
        </TimelineDetails>
    </TimelineWrapper>
)

export default Timeline;