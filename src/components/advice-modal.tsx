import Button from "@/components/button";
import Spinner from "./spinner";

const AdviceModal = ({
  text,
  onClick,
  buttonText,
  fetching,
}: {
  text?: string;
  onClick: () => void;
  buttonText?: string;
  fetching?: boolean;
}) => {
  return (
    <div className="z-10 m-4 flex max-w-xl flex-col items-center justify-center space-y-8 rounded-lg bg-neutral-700 p-8 text-center shadow-lg">
      {fetching && !text ? (
        <Spinner className="h-10 w-10" />
      ) : (
        <div className="text-3xl font-medium text-white">{text}</div>
      )}
      <Button onClick={onClick} disabled={fetching}>
        {fetching && text ? <Spinner className="h-5 w-5" /> : buttonText}
      </Button>
    </div>
  );
};

export default AdviceModal;
