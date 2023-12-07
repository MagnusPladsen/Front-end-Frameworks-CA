import { Link } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton.component";

export default function NotFoundPage({
  text,
  error,
}: {
  text?: string;
  error?: boolean;
}) {
  let textString = "The page you are looking for was not found...";

  if (error) {
    textString = "Something went wrong, please try again";
  }
  return (
    <div className="bg-background flex flex-col gap-10">
      <h1>{text ?? textString}</h1>
      <Link to="/">
        <DefaultButton text="Go back" />
      </Link>
    </div>
  );
}
