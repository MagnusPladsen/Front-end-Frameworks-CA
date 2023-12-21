import { useLocation } from "react-router-dom";

/**
 * The function `usePath` returns the current path of the application using the `useLocation` hook.
 * @returns an object with a property called "currentPath", which represents the current path of the
 * application.
 */

export default function usePath() {
  const location = useLocation();
  const currentPath = location.pathname;

  return { currentPath };
}
