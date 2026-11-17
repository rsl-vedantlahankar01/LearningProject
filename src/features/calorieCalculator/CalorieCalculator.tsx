import { useActionState } from "react";

interface FormState {
  error: string | null;
  success: number | null;
}

function calculateCalories(
  previousState: FormState,
  formData: FormData,
): FormState {
  console.log(formData);
  return previousState;
}
export function CalorieCalculator() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    calculateCalories,
    { error: null, success: null },
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
            <form>
              <div className="gender mb-3">
                <span className="form-label fw-semibold small text-dark d-block">
                  Gender
                </span>
                <span className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
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
                    className="form-control"
                  />
                </div>
              </div>

              <div className="activity-level mb-3">
                <label
                  htmlFor="activity-level"
                  className="form-label fw-semibold small text-dark"
                >
                  Activity Level
                </label>
                <select
                  name="activity-level"
                  id="activity-level"
                  className="form-select"
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
                <select name="goal" id="goal" className="form-select">
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
        </div>
      </div>
    </section>
  );
}
