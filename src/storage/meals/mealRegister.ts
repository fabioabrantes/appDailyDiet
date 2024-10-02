import AsyncStorage from '@react-native-async-storage/async-storage';

import { MealTypeProps } from 'src/@types/navigation';
import { AppError } from '@utils/AppError';
import { mealsGetAll } from './mealsGetAll';

import { MEAL_COLLECTION } from '@storage/storageConfig';

export async function mealRegister(date: string, newMeal: MealTypeProps) {
  try {
    const storedMeals = await mealsGetAll();

    const mealsByDateTarget = storedMeals.find(item => item.date === date);
    if (!mealsByDateTarget) {
      const newMealByDate = {
        date,
        data: [newMeal]
      }
      storedMeals.push(newMealByDate);
    } else {
      const existsMealOnHour = mealsByDateTarget.data.some(meal => meal.hour === newMeal.hour);
      if (!existsMealOnHour) {
        mealsByDateTarget.data.push(newMeal);
      } else {
        throw new AppError('Já existe uma refeição cadastrdas para esse horário.');
      }
    }
    console.log(storedMeals);
    const storage = JSON.stringify([...storedMeals]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw new AppError('Error ao carregar a lista de refeições.');
  }
}