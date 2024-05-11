import React from 'react';
import { Navigate } from 'react-router-dom';


export function AuthGuard({ children }) {
const user= localStorage.getItem("user")
console.log(user)
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}

