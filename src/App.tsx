import { useState, type ReactNode } from "react";
import { Navbar, type TabId } from "./components/Navbar";

const TAB_VIEWS: Record<TabId, ReactNode> = {
  meals: <h1>Meals</h1>,
  calculator: <h1>Calorie Calculator</h1>,
  workouts: <h1>Workouts</h1>,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("meals");

  return (
    <>
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="container py-5">{TAB_VIEWS[activeTab]}</main>
    </>
  );
}
