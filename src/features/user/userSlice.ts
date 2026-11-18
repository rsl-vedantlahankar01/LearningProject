import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  ActivityLevel,
  Gender,
  Goal,
} from "../calorieCalculator/calorieMath";

export interface UserState {
  gender: Gender;
  age: number;
  weight: number;
  height: number;
  activityLevel: ActivityLevel;
  goal: Goal;
  dailyCalories: number | null;
}

const initialState: UserState = {
  gender: "male",
  age: 25,
  weight: 70,
  height: 175,
  activityLevel: "light",
  goal: "maintain",
  dailyCalories: null,
};

const userSlice = createSlice({
  name: "user", // The label/name for this particular slice
  initialState, // Starting properties like age, gender, weight, etc
  reducers: {
    // The methods of this "user" slice which can perform operations and update the initialState
    // "state" = current user data in the store
    // "action" = the envelope sent by component
    // action.payload = the actual data inside the envelope
    saveUserProfile(_state, action: PayloadAction<UserState>) {
      return action.payload; // Replaces the old user data with the new data inside the envelope
    },
    // When a component calls saveUserProfile(newData), Redux wraps newData inside an envelope
    // object: { type: "user/saveUserProfile", payload: newData }. PayloadAction<UserState> is
    // simply TypeScript's label saying: "The payload inside this envelope must match the
    // UserState interface."
  },
});

// Imported by the components to modify that state of this service
export const { saveUserProfile } = userSlice.actions;
// Imported by store.ts
export default userSlice.reducer;

// Why can't components just import userSlice.reducer and call it directly?
// Because in Redux, components aren't allowed to touch the service engine
// directly—they can only send instructions (saveUserProfile(data)) to the
// central store, and the store hands those instructions to userSlice.reducer
// to run safely.
