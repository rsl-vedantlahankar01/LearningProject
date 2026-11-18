import { useActionState } from "react";
import {
  mifflinStJeorEquation,
  type ActivityLevel,
  type Gender,
  type Goal,
} from "./calorieMath";

interface FormValues {
  gender: Gender;
  age: number;
  weight: number;
  height: number;
  activityLevel: ActivityLevel;
  goal: Goal;
}

interface FormState {
  error: string | null;
  success: number | null;
  values: FormValues;
}

function calculateCalories(
  _previousState: FormState,
  formData: FormData,
): FormState {
  const gender = formData.get("gender") as Gender;
  const age = Number(formData.get("age")) || 25;
  const weight = Number(formData.get("weight")) || 70;
  const height = Number(formData.get("height")) || 175;
  const activityLevel = formData.get("activityLevel") as ActivityLevel;
  const goal = formData.get("goal") as Goal;
  const totalCalories = mifflinStJeorEquation({
    gender,
    weight,
    height,
    age,
    activityLevel,
    goal,
  });
  return {
    error: null,
    success: totalCalories,
    values: { gender, age, weight, height, activityLevel, goal },
  };
}

export function CalorieCalculator() {
  // The form's states looks like FormState and the data looks like FormData
  // React returns state,formAction and isPending
  // state holds initial error,success values at first and when updates to whatever calculateCalories returns
  // we put formAction on form's action so react knows when to trigger calculateCalories
  // isPending is true while calculateCalories is running, otherwise it is false
  const [state, formAction, _isPending] = useActionState<FormState, FormData>(
    // This function runs whenever the form is submitted
    calculateCalories,
    // Initial values of state. before submit
    {
      error: null,
      success: null,
      values: {
        gender: "male",
        age: 25,
        weight: 70,
        height: 175,
        activityLevel: "light",
        goal: "maintain",
      },
    },
  );

  return (
    <section className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">
        <div className="card border shadow-sm rounded-4 overflow-hidden">
          <div className="card-header bg-white border-bottom p-4">
            <span className="badge bg-primary-subtle text-primary-emphasis rounded-pill px-3 py-2 mb-2">
              🔥 Daily Target
            </span>
            <h1 className="h4 fw-bold text-dark mb-1">Calorie Calculator</h1>
            <p className="text-secondary small mb-0">
              Enter your details below to estimate your daily calorie needs.
            </p>
          </div>

          <div className="card-body p-4">
            <form action={formAction}>
              <div className="gender mb-3">
                <span className="form-label fw-semibold small text-dark d-block">
                  Gender
                </span>
                <span className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      key={`male-${state.values.gender}`}
                      className="form-check-input"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      defaultChecked={state.values.gender === "male"}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      key={`female-${state.values.gender}`}
                      className="form-check-input"
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      defaultChecked={state.values.gender === "female"}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </span>
              </div>

              <div className="age-weight-height row g-3 mb-3">
                <div className="col-sm-4">
                  <label
                    htmlFor="age"
                    className="form-label fw-semibold small text-dark d-block"
                  >
                    Age
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="25"
                    defaultValue={state.values.age}
                    className="form-control"
                  />
                </div>
                <div className="col-sm-4">
                  <label
                    htmlFor="weight"
                    className="form-label fw-semibold small text-dark d-block"
                  >
                    Weight (kg)
                  </label>
                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="70"
                    defaultValue={state.values.weight}
                    className="form-control"
                  />
                </div>
                <div className="col-sm-4">
                  <label
                    htmlFor="height"
                    className="form-label fw-semibold small text-dark d-block"
                  >
                    Height (cm)
                  </label>
                  <input
                    id="height"
                    name="height"
                    type="number"
                    placeholder="175"
                    defaultValue={state.values.height}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="activityLevel mb-3">
                <label
                  htmlFor="activityLevel"
                  className="form-label fw-semibold small text-dark"
                >
                  Activity Level
                </label>
                <select
                  key={state.values.activityLevel}
                  name="activityLevel"
                  id="activityLevel"
                  className="form-select"
                  defaultValue={state.values.activityLevel}
                >
                  <option value="bmr">Basal Metabolic Rate (BMR)</option>
                  <option value="sedentary">
                    Sedentary: little or no exercise
                  </option>
                  <option value="light">Light: exercise 1-3 times/week</option>
                  <option value="moderate">
                    Moderate: exercise 4-5 times/week
                  </option>
                  <option value="active">
                    Active: daily exercise or intense exercise 3-4 times/week
                  </option>
                  <option value="veryActive">
                    Very Active: intense exercise 6-7 times/week
                  </option>
                </select>
              </div>

              <div className="goal mb-4">
                <label
                  htmlFor="goal"
                  className="form-label fw-semibold small text-dark"
                >
                  Goal
                </label>
                <select
                  key={state.values.goal}
                  name="goal"
                  id="goal"
                  className="form-select"
                  defaultValue={state.values.goal}
                >
                  <option value="weightLoss">Weight loss (0.5 kg/week)</option>
                  <option value="mildWeightLoss">
                    Mild weight loss (0.25 kg/week)
                  </option>
                  <option value="maintain">Maintain weight</option>
                  <option value="leanMuscleGain">
                    Lean muscle gain (0.25 kg/week)
                  </option>
                  <option value="muscleGain">Muscle gain (0.5 kg/week)</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 rounded-pill fw-semibold"
              >
                Calculate Calories
              </button>
            </form>
          </div>
          {state.success !== null && (
            <div className="card-footer bg-primary-subtle border-top p-4 text-center">
              <span className="text-uppercase small fw-semibold text-primary-emphasis d-block mb-1">
                Estimated Daily Calories
              </span>
              <div className="display-6 fw-bold text-dark">
                {state.success.toLocaleString()}
                <span className="fs-6 fw-normal text-secondary">
                  kcal / day
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
