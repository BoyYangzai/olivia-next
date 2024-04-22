"use client";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Content = {
  colorType?: "colorful";
  label: string;
};

interface OnBoardingItemData {
  title: string;
  content: Content[] | string;
  options?: string[];
}

const OnBoardingItem = ({
  data,
  onClick,
}: {
  data: OnBoardingItemData;
  onClick?: (res?: string) => void;
}) => {
  const { title, content, options } = data;
  const key = Math.random().toString(36).substring(7);

  const fadeInAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { ease: "easeOut", duration: 1.5 },
  };

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      <motion.div
        className="w-full fmx-auto mb-2 text-sm text-transparent opacity-zero bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-center"
        {...fadeInAnimation}
      >
        {title}
      </motion.div>
      <motion.div
        className={`w-[40rem] text-center font-semibold text-lg`}
        {...fadeInAnimation}
      >
        {typeof content === "string"
          ? content
          : content.map((item, index) => (
              <span
                key={key + index}
                className={`${
                  item.colorType === "colorful"
                    ? "fmx-auto text-transparent opacity-zero bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-center"
                    : undefined
                }`}
              >
                {item.label}
              </span>
            ))}
      </motion.div>
      <div className="w-full flex justify-center flex-wrap mt-10">
        {options ? (
          options?.map((option, index) => (
            <motion.div
              key={key + index}
              className="w-full flex justify-center"
              {...fadeInAnimation}
            >
              <Button
                type="default"
                style={{
                  width: "20rem",
                  height: "3rem",
                  marginTop: "1rem",
                  fontSize: "1rem",
                  borderColor: "#e0e0e0",
                }}
                onClick={() => onClick?.(option)}
              >
                <div className="w-full !px-6">{option}</div>
              </Button>
            </motion.div>
          ))
        ) : (
          <motion.div {...fadeInAnimation}>
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{
                height: "3rem",
                background: "black",
                marginTop: "1rem",
              }}
              onClick={() => onClick?.()}
            >
              <div className="w-full !px-8">Continue</div>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const OnBoarding = ({
  data,
  onFinish,
}: {
  data: OnBoardingItemData[];
  onFinish?: (res: string[]) => void;
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
      <div className="w-full -translate-y-2.5">
        <Progress percent={percent} strokeColor={"black"} showInfo={false} />
        <div className="text-lg ml-4">
          {index > 0 && <LeftOutlined onClick={handleBack} />}
        </div>
      </div>
      <OnBoardingItem data={data?.[index]} onClick={handleSelect} />
    </div>
  );
};

export default OnBoarding;
