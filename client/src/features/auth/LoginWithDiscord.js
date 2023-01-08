import React from "react";
import { useAuthContext } from 'contexts/AuthContext';

const LoginWithDiscord = () => {
  const auth = useAuthContext();

  // If user is not authenticated; Render login button
  if (!auth.isAuthenticated()) {
    return (
      <form action="/auth/discord">
        <button type="submit">Login with Discord</button>
      </form>
    )
  }  
  
  return (
    <div>
      <button onClick={auth.logout}>Logout</button>
    </div>
  );
};

export default LoginWithDiscord;
