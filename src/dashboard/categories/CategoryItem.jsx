import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    ItemDetails as CategoryItemDetails,
    ItemElement as CategoryItemWrapper
} from '../../components/ItemDetails';

import getCategoryIcon from '../helpers/getCategoryIcon';

const CategoryItem = ({category, value}) => {
    const categoryIcon = getCategoryIcon(category)

    return(
        <CategoryItemWrapper>
            <CategoryItemDetails>
                <FontAwesomeIcon icon={categoryIcon} className={category.toLowerCase().split(" ")[0]}/>
                <h3>{category}</h3>
                <span>{value}$</span>
            </CategoryItemDetails>
        </CategoryItemWrapper>
    )
}

export default CategoryItem;
