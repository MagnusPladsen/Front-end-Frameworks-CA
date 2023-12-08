import { TailSpin } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="flex gap-5 flex-col mt-20 items-center justify-center">
      <TailSpin
        height="80"
        width="80"
        color="#815034"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="text-primary">Loading...</p>
    </div>
  );
}
