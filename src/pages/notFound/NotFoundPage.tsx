import { Link } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton.component";
import H1 from "../../common/text/H1.component";

export default function NotFoundPage({
  text,
  headerText,
  error,
}: {
  text?: string;
  headerText?: string;
  error?: boolean;
}) {
  let headerString = "Page not found";
  let textString = "The page you are looking for was not found...";

  if (error) {
    headerString = "Error 404";
    textString = "Something went wrong, please try again";
  }
  return (
    <div className="bg-white p-6 py-20 lg:px-40 lg:pb-40 rounded-b flex flex-col gap-10 w-full lg:w-fit lg:mx-auto items-center justify-center shadow">
      <H1>{headerText ?? headerString}</H1>
      <h2>{text ?? textString}</h2>
      <Link className="mt-10" to="/">
        <DefaultButton text="Home" />
      </Link>
    </div>
  );
}
