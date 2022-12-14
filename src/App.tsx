import AdviceModal from "@/components/advice-modal";
import { useState, useEffect } from "react";

export const App = () => {
  const [adviceSlip, setAdviceSlip] = useState("");
  const [fetching, setFetching] = useState(false);
  const [fetchTime, setFetchTime] = useState(0);

  const fetchAdvice = async () => {
    setFetching(true);
    const remainingTime = Date.now() - fetchTime;
    if (remainingTime < 2000)
      await new Promise((resolve) => setTimeout(resolve, 2000 - remainingTime));
    const { slip } = await (
      await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    ).json();
    setFetching(false);
    setFetchTime(Date.now());
    return slip.advice;
  };

  const applyAdvice = async () => setAdviceSlip(await fetchAdvice());

  useEffect(() => {
    applyAdvice();
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-4 transition-all">
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
      <div className="absolute bottom-6 space-x-2 md:right-6">
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
