import React from "react";
import { useRoutingContext } from "contexts/RoutingContext";
import { useAuthContext } from "contexts/AuthContext";
import LandingPage from "features/home/LandingPage";
import CalendarPage from "features/home/CalendarPage";

function App() {
  const routing = useRoutingContext();
  const auth = useAuthContext();
  const isAuthenticated = auth.isAuthenticated();

  return (
    <>
      {isAuthenticated && (
        <h3>Hello, {auth.user.displayName}, welcome to Together!</h3>
      )}
      {routing.currentPage === "landingPage" && (
        <div className="bg-primary overflow-hidden flex justify-center items-center h-screen">
          <div className="flex w-1/3">
            <LandingPage />
          </div>
        </div>
      )}
      {routing.currentPage === "calendarPage" && <CalendarPage />}
    </>
  );
}

export default App;
