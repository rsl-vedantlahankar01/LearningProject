import { Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import { Meals } from "../features/meals/Meals";
import { CalorieCalculator } from "../features/calorieCalculator/CalorieCalculator";
import { Workouts } from "../features/workouts/Workouts";

export function AppRoutes() {
  return (
    <Routes>
      {/* Redirect "/" to "/meals" */}
      <Route
        path={PATHS.ROOT}
        element={<Navigate to={PATHS.MEALS} replace />}
      />

      {/* Feature Routes */}
      <Route path={PATHS.MEALS} element={<Meals />} />
      <Route path={PATHS.CALCULATOR} element={<CalorieCalculator />} />
      <Route path={PATHS.WORKOUTS} element={<Workouts />} />

      {/* Catch-all: redirect any unknown URL back to "/meals" */}
      <Route path="*" element={<Navigate to={PATHS.MEALS} replace />} />
    </Routes>
  );
}
