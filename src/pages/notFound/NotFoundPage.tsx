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
    <div className="bg-white p-6 py-20 lg:p-20 rounded flex flex-col gap-10 w-full lg:w-fit lg:mx-auto items-center justify-center">
      <h1>{text ?? textString}</h1>
      <Link to="/">
        <DefaultButton text="Home" />
      </Link>
    </div>
  );
}
