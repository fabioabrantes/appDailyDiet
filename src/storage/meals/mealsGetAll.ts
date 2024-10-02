import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { MealListTypeProps } from 'src/@types/navigation';

export async function mealsGetAll(): Promise<MealListTypeProps[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealListTypeProps[] = storage ? JSON.parse(storage) : [];

    return meals;

  } catch (error) {
    throw new AppError("Não foi possível obter as refeições.");
  }
}