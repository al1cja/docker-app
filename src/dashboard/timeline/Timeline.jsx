import React from 'react';

import TimelineItem from './TimelineItem';
import TimelineChart from './TimelineChart';

import { 
    ItemWrapper as TimelineWrapper,
    ItemSection as TimelineDetails
} from '../../components/ItemDetails';

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