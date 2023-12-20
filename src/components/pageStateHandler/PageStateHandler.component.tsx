import NotFoundPage from "../../pages/notFound/NotFoundPage";
import LoadingSpinner from "../loading/LoadingSpinner.component";

/**
 * The function `PageStateHandler` handles different states (loading, error, data not found) and
 * renders appropriate components based on those states.
 * @param `isLoading` a boolean indicating whether the data is currently being loaded or not.
 * @param `error` a boolean indicating whether an error occurred while fetching the data.
 * @param `dataFdataNotFoundound` a boolean indicating whether the data was found or not.
 * @returns a loadingSpinner component if the data is currently being loaded, a notFoundPage
 * component if an error occurred or if the data was not found, and the children if the data was
 * found.
 */
export default function PageStateHandler({
  isLoading,
  error,
  dataNotFound,
  children,
}: {
  isLoading: boolean;
  error: boolean;
  dataNotFound: boolean;
  children: React.ReactNode;
}) {
  if (isLoading) return <LoadingSpinner />;

  if (error) return <NotFoundPage error />;

  if (dataNotFound) return <NotFoundPage />;

  return <>{children}</>;
}
