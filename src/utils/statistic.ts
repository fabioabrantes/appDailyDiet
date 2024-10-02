import { MealListTypeProps } from "src/@types/navigation";

// Função para calcular quantidade total de refeições, quantidade dentro/fora da dieta, 
//maior sequencia dentro da ieta e porcentagem
export function calculateMealStats(meals: MealListTypeProps[]) {
  console.log(meals);
  let totalMeals = 0;
  let mealsInDiet = 0;
  let mealsOutDiet = 0;
  let bestSequenceInDiet = 0;
  let currentSequence = 0;

  meals.forEach(mealDay => {
    mealDay.data.forEach(mealInfo => {
      totalMeals += 1;

      if (mealInfo.isDiet) {
        mealsInDiet += 1;
        currentSequence += 1;
        if (currentSequence > bestSequenceInDiet) {
          bestSequenceInDiet = currentSequence;
        }
      } else {
        mealsOutDiet += 1;
        currentSequence = 0; // Reinicia a sequência se a refeição não estiver dentro da dieta
      }
    });
  });

  // Calcula a porcentagem de refeições dentro da dieta
  const percentageInDiet = totalMeals > 0 ? (mealsInDiet / totalMeals) * 100 : 0;

  return { totalMeals, mealsInDiet, mealsOutDiet, percentageInDiet, bestSequenceInDiet };
}