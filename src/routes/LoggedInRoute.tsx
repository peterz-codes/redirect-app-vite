import { useContext } from "react";
import type { RouteProps } from "react-router-dom";
import { UserContext } from "../UserContext";
import CondtionalRoute from "./ConditionalRoute";

/**
 * A custom component which binds a specific condition (user is logged in),
 * and a specific redirect (access-denied), to the abstract `ConditionalRoute`
 */
export function LoggedInRoute({ children }: RouteProps) {
  return (
    <CondtionalRoute
      condition={useContext(UserContext).loggedIn}
      redirectTo="/access-denied"
    >
      {children}
    </CondtionalRoute>
  );
}
