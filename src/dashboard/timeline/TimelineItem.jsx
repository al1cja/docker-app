import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCar, faUtensils, faShirt, faMoneyBill, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

const TimelineItemWrapper = styled.div`
    border: 1px solid #415a8b;
    border-radius: 5px;
    width: 80%;
    margin: 5px 0;
`;

const TimelineItemDate = styled.div`
    background-color: #dce2ef;
    padding: 5px;
    border-radius: 5px 5px 0 0;
    color: #415a8b;
`;

const TimelineItemDetails = styled.div`
    display: grid;
    grid-template-columns: 100px calc(100% - 200px) 100px;
    padding: 5px;
    justify-items: center;
    align-items: center;

    svg {
        color: #e8926f;
        font-size: 40px;
    }

    .price {
        color: #ed4e5c;
    }
`;

const TimelineItemName = styled.span`
    display: grid;

    h3 {
        margin: 10px 0;
    }
`;

const TimelineItem = ({ name, category, price, date}) => {
    const categoryIcon = (() => {
        switch(category) {
            case 'Housing':
                return faHouse;
            case 'Transportation':
                return faCar;
            case 'Food':
                return faUtensils;
            case 'Clothes':
                return faShirt;
            case 'Utilities':
                return faMoneyBill;
            default:
                return faCircleQuestion;
        }
      })();
        

    return(
        <TimelineItemWrapper>
            <TimelineItemDate>{date}</TimelineItemDate>
            <TimelineItemDetails>
                <FontAwesomeIcon icon={categoryIcon}/>
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
