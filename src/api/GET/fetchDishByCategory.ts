import axios from 'axios'
import {Dish} from '../types'

const fetchDishes=async(category : string) :Promise<Dish[]>=>{
    try {
        const response = await axios.get(`https://l4ts4vhb71.execute-api.us-east-1.amazonaws.com/api/client/getDish/${category}`);
        return response.data.dishes;
      } catch (error) {
        console.error('Error fetching menu:', error);
        return [];
    }
}

export default fetchDishes;