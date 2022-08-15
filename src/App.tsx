import AdviceModal from "@/components/advice-modal";
import { useState, useEffect } from "react";

export const App = () => {
  const [adviceSlip, setAdviceSlip] = useState("");
  const [fetching, setFetching] = useState(false);

  const fetchAdvice = async () => {
    setFetching(true);
    const { slip } = await (
      await fetch("https://api.adviceslip.com/advice")
    ).json();
    setFetching(false);
    return slip.advice;
  };

  const applyAdvice = async () => setAdviceSlip(await fetchAdvice());

  useEffect(() => {
    applyAdvice();
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
      <AdviceModal
        buttonText={"Another one"}
        text={adviceSlip}
        onClick={applyAdvice}
        fetching={fetching}
      />
      <span className="space-y-2 text-center text-white">
        made with <span className="text-violet-400">♥</span> by{" "}
        <a
          href="https://github.com/DinoZoidDev"
          target="_blank"
          rel="noreferrer noopener"
        >
          dingo
        </a>
      </span>
      <div className="absolute bottom-6 right-6 space-x-2">
        <a
          className="relative text-neutral-500"
          href="https://github.com/DinoZoidDev/advice-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
        <a
          className="relative text-neutral-500"
          href="https://api.adviceslip.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Advice Slip API
        </a>
      </div>
    </div>
  );
};

export default App;
