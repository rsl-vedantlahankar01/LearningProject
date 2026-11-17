export type Gender = "male" | "female";
export type ActivityLevel =
  | "bmr"
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "veryActive";
export type Goal =
  | "weightLoss"
  | "mildWeightLoss"
  | "maintain"
  | "leanMuscleGain"
  | "muscleGain";

export interface CalorieCalculatorInput {
  gender: Gender;
  age: number;
  weight: number;
  height: number;
  activityLevel: ActivityLevel;
  goal: Goal;
}

export const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  bmr: 1.0,
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

export const GOAL_CALORIE_ADJUSTMENTS: Record<Goal, number> = {
  weightLoss: -500,
  mildWeightLoss: -250,
  maintain: 0,
  leanMuscleGain: 250,
  muscleGain: 500,
};

// Mifflin-St Jeor Equation
export function mifflinStJeorEquation(input: CalorieCalculatorInput) {
  const { gender, weight, height, age, activityLevel, goal } = input;
  const BMR =
    10 * weight + 6.25 * height - 5 * age + (gender === "male" ? 5 : -161);
  const totalCalories =
    BMR * ACTIVITY_MULTIPLIERS[activityLevel] + GOAL_CALORIE_ADJUSTMENTS[goal];

  return Math.round(totalCalories);
}
