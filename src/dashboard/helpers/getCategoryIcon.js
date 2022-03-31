import { 
    faHouse, 
    faCar, 
    faUtensils, 
    faShirt, 
    faMoneyBill, 
    faCircleQuestion, 
    faStethoscope,
    faChampagneGlasses
} from '@fortawesome/free-solid-svg-icons'

const getCategoryIcon = (category) => {
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
        case 'Medical & Healthcare':
            return faStethoscope;
        case 'Entertainment':
            return faChampagneGlasses;
        default:
            return faCircleQuestion;
    }
}

export default getCategoryIcon;
