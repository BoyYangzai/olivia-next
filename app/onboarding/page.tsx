"use client";
import { useEffect, useState } from "react";
import OnBoarding from "../../components/OnBoarding";
import { Progress } from "antd";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const OnBoardingPage = () => {
  const [isFinish, setIsFinish] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isFinish) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [isFinish]);
  return (
    <div className="w-full h-full">
      <div className="h-full flex-wrap justify-center items-center">
        {isFinish ? (
          <div className="w-full h-full flex justify-center items-start flex-wrap">
            <div className="w-full -translate-y-2.5">
              <Progress percent={100} strokeColor={"black"} showInfo={false} />
            </div>
            <div className="w-full flex justify-center items-center flex-wrap -mt-8">
              <Image
                className="rounded-full overflow-hidden"
                src={"/img/olivia_avatar.jpeg"}
                alt=""
                width={100}
                height={100}
              ></Image>
              <div className="w-full font-bold text-center text-lg mt-10">
                Thank you for taking the first step with Olivia
              </div>

              <div className="w-full text-center text-gray-500 mb-10 mt-2">
                Your mental health journey starts soon
              </div>
              <LoadingOutlined></LoadingOutlined>
            </div>
          </div>
        ) : (
          <OnBoarding
            onFinish={(res) => {
              setIsFinish(true);
              console.log(res);
            }}
            data={[
              {
                title: "Getting started",
                content: [
                  {
                    label: "",
                  },
                  {
                    label: " yang ",
                    colorType: "colorful",
                  },
                  {
                    label: `👋 Welcome to a space of serenity and support. I'm Olivia, ready to accompany you on a path to well-being. Rest assured, your privacy is my priority. With a gentle nod from you, we'll begin our journey together. May I have your consent to move forward?`,
                  },
                ],
              },
              {
                title: "Getting started",
                content:
                  "Which of the following best matches your recent mental state?",
                options: [
                  "Always worrying about things",
                  "Always worrying about things",
                  "Always worrying about things",
                  "Always worrying about things",
                  "Always worrying about things",
                  "Always worrying about things",
                  "I am doing well",
                ],
              },
              {
                title: "Getting started",
                content:
                  "Which of the following best matches your recent mental state?",
                options: [
                  "Always worrying about things",
                  "Always worrying about things",
                  "Always worrying about things",
                ],
              },
              {
                title: "Getting started",
                content: "What is your preferred gender pronoun?",
                options: [
                  "Always worrying about things",
                  "Always worrying about things",
                  "Always worrying about things",
                ],
              },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default OnBoardingPage;
