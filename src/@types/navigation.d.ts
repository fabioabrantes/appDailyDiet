export type IsInDietTypeProps = boolean;

export type MealTypeProps = {
  meal: string;
  hour: string;
  description: string;
  isDiet: IsInDietTypeProps;
}

export type MealDetailTypeProps = {
  date: string;
  data: MealTypeProps;
};

export type MealListTypeProps = {
  date: string;
  data: MealTypeProps[];
};

export type StatisticProps = {
  totalMeals: number;
  mealsInDiet: number;
  mealsOutDiet: number;
  percentageInDiet: number;
  bestSequenceInDiet: number;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistics: {
        statistic: StatisticProps;
      }
      RegisterMeal: undefined;
      EditMeal: {
        meal: MealDetailTypeProps;
      }
      DetailsMeal: {
        meal: MealDetailTypeProps;
      }
      SuccessRegister: {
        isInDiet: IsInDietTypeProps;
      }
    }
  }
}