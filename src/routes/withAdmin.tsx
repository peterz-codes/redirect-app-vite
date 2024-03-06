import { FunctionComponent, useContext } from "react";
import { UserContext } from "../UserContext";
import { withCondition } from "./withCondition";

export const withAdmin = (Component: FunctionComponent) => {
  const { loggedIn, isAdmin } = useContext(UserContext);

  return withCondition(Component, loggedIn && isAdmin, "/access-denied");
};
