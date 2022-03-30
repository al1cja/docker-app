import React, {useEffect, useState} from 'react';

import CategoryChart from './CategoryChart';
import CategoryItem from './CategoryItem';

import { 
    ItemWrapper as CategoriesWrapper,
    ItemSection as CategoriesDetails
} from '../../components/ItemDetails';

const getValues = (filteredCategories, data) => {
    const values = []
  
    for (const category of filteredCategories) {
      const categoryValue = data
        .filter(expense => expense.category === category)
        .map(expense => expense.price)
        .reduce((prev, curr) => prev + curr)
      values.push(categoryValue)
    }
    
    return values;
} 

const getCategories = (data) => {
    const categories = data.map(expense => expense.category)
    return categories.filter((value, index) => categories.indexOf(value) === index)
}

const Categories = ({ data, isLoading }) =>  {
    const [values, setValues] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        if(!isLoading) {
            const filteredCategories = getCategories(data)
            const filteredValues = getValues(filteredCategories, data)
            setCategories(filteredCategories)
            setValues(filteredValues)
        }
    }, [isLoading, data])

    const isDataLoaded = categories && categories.length > 0;

    return (
        <CategoriesWrapper>
            {isDataLoaded && <CategoryChart expenseData={data} categories={categories} values={values} />}
            <CategoriesDetails>
                <h2>Categories' Details</h2>
                {isDataLoaded && categories.map((category, index) => (
                    <CategoryItem
                        key={category+index}
                        category={category}
                        value={values[index]}
                    />
                ))}
            </CategoriesDetails>
        </CategoriesWrapper>
    )
}


export default Categories;
