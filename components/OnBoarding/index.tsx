"use client";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Content = {
  colorType?: "colorful";
  label: string;
};

interface OptionItem {
  label: string;
  value?: string;
  color?: boolean;
}
interface OnBoardingItemData {
  title: string;
  type?: "select" | "input";
  //  select type
  options?: (OptionItem | string)[] | string[];
  //  input type
  content: Content[] | string | string[];
  placeholder?: string;
}

export type OnBoardingData = OnBoardingItemData[];

const OnBoardingItem = ({
  data,
  onClick,
  animation,
}: {
  data: OnBoardingItemData;
  onClick?: (res?: string) => void;
  animation?: "fade" | "slide";
}) => {
  const { title, content, options } = data;
  const [inputValue, setInputValue] = useState("");

  const mergedOptions = options?.map((option) => {
    if (typeof option === "string") return { label: option, value: option };
    return {
      ...option,
      value: option.value ?? option.label,
    };
  });
  const key = Math.random().toString(36).substring(7);

  const fadeInAnimation = animation === "fade" && {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { ease: "easeOut", duration: 1.5 },
  };

  const renderMain = () => {
    switch (data.type) {
      case "input":
        return (
          <motion.div
            className="w-full flex justify-center items-center flex-wrap"
            {...fadeInAnimation}
          >
            <div className="w-full flex justify-center items-center">
              <input
                type="text"
                className="w-80 h-10 border-b-2 border-gray-300 rounded-md px-4 bg-transparent text-center outline-none"
                placeholder={data.placeholder ?? "Enter your answer here"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{
                width: "20rem",
                height: "3.4rem",
                marginTop: "2rem",
              }}
              onClick={() => {
                onClick?.(
                  inputValue === "" ? "user not input anything" : inputValue,
                );
                setInputValue("");
              }}
            >
              <div className="w-full !px-8">Continue</div>
            </Button>
          </motion.div>
        );
      default:
        if (mergedOptions) {
          return mergedOptions?.map((option, index) => (
            <motion.div
              key={key + index}
              className="w-full flex justify-center"
              {...fadeInAnimation}
            >
              <Button
                type={option?.color ? "primary" : "default"}
                style={{
                  width: "20rem",
                  height: "3.2rem",
                  marginTop: "1rem",
                  fontSize: "1rem",
                  borderColor: "transparent",
                  backgroundColor: option?.color ? undefined : "#fff",
                  borderRadius: "0.8rem",
                  overflow: "hidden",
                }}
                onClick={() => onClick?.(option?.value)}
              >
                <div className="w-full !px-6">{option.value}</div>
              </Button>
            </motion.div>
          ));
        } else {
          return (
            <motion.div {...fadeInAnimation}>
              <Button
                type="primary"
                shape="round"
                size="large"
                style={{
                  height: "3rem",
                  marginTop: "1rem",
                }}
                onClick={() => onClick?.()}
              >
                <div className="w-full !px-8">Continue</div>
              </Button>
            </motion.div>
          );
        }
    }
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
        className={`w-[18rem] md:w-[40rem] text-center font-semibold text-lg`}
        {...fadeInAnimation}
      >
        {typeof content === "string"
          ? content
          : content.map((item, index) => {
              if (typeof item === "string") {
                return <span key={key + index}>{item}</span>;
              }
              return (
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
              );
            })}
      </motion.div>
      <div className="w-full flex justify-center flex-wrap mt-10">
        {renderMain()}
      </div>
    </div>
  );
};

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
