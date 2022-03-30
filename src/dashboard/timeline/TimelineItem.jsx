import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    ItemDetails as TimelineItemDetails,
    ItemElement as TimelineItemWrapper
} from '../../components/ItemDetails';

import getCategoryIcon from '../helpers/getCategoryIcon';

const TimelineItemDate = styled.div`
    background-color: #dce2ef;
    padding: 5px;
    border-radius: 5px 5px 0 0;
    color: #415a8b;
`;

const TimelineItemName = styled.span`
    display: grid;

    h3 {
        margin: 10px 0;
    }
`;

const TimelineItem = ({ name, category, price, date}) => {
    const categoryIcon = getCategoryIcon(category)
        
    return(
        <TimelineItemWrapper>
            <TimelineItemDate>{date}</TimelineItemDate>
            <TimelineItemDetails>
                <FontAwesomeIcon icon={categoryIcon} className={category.toLowerCase().split(" ")[0]}/>
                <TimelineItemName>
                    <h3>{category}</h3>
                    <span>{name}</span>
                </TimelineItemName>
                <span className='price'>-{price}$</span>
            </TimelineItemDetails>
        </TimelineItemWrapper>
    )
}

export default TimelineItem;
