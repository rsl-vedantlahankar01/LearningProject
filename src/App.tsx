import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <AppRoutes />
      </main>
    </>
  );
}
