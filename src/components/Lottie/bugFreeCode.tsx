"use client";

import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";

export default function BugFreeCode() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    import("public/Lottie/freeCodes.json").then((mod) => {
      setAnimationData(mod.default || mod);
    });
  }, []);

  const options = {
    animationData: animationData,
    loop: true,
    style: { width: "100%", height: "100%" },
  };

  const { View } = useLottie(options);

  return <div>{animationData ? View : null}</div>;
}
