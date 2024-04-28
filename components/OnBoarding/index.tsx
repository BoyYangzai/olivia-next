"use client";
import { LeftOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import { useEffect, useState } from "react";
import { OnBoardingData } from "./type";
import OnBoardingItem from "./onBoardingItem";

const OnBoarding = ({
  data,
  onFinish,
  animation,
}: {
  data: OnBoardingData;
  onFinish?: (res: string[]) => void;
  animation?: "fade" | "slide";
}) => {
  const [index, setIndex] = useState(0);
  const [selectedResult, setSelectedResult] = useState<string[] | null>(null);
  const percent = (index / data.length) * 100;
  const handleSelect = (res?: string) => {
    if (index <= data.length - 1) {
      setSelectedResult([...(selectedResult ?? []), res!].filter(Boolean));
    }
  };
  const handleBack = () => {
    if (index > 0) setIndex(index - 1);
  };

  useEffect(() => {
    if (selectedResult) {
      if (index + 1 === data.length) {
        onFinish?.(selectedResult);
      }
      setIndex(index + 1);
    }
  }, [selectedResult]);

  return (
    <div className="w-full h-full flex justify-center items-start flex-wrap">
      <div className="w-full -translate-y-3">
        <Progress percent={percent} strokeColor={"#ea445a"} showInfo={false} />
        <div className="text-lg ml-4">
          {index > 0 && <LeftOutlined onClick={handleBack} />}
        </div>
      </div>
      <OnBoardingItem
        data={data?.[index]}
        onClick={handleSelect}
        animation={animation}
      />
    </div>
  );
};

export default OnBoarding;
