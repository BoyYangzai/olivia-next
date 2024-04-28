"use client";
import { useEffect, useState } from "react";
import OnBoarding, { OnBoardingData } from "../../components/OnBoarding";
import { Progress } from "antd";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const onBoardingData: OnBoardingData = [
  {
    title: "Welcome Message",
    content: [
      "Welcome to a serene support space.",
      "I'm Olivia, your well-being guide.",
      "Privacy is key, and we start with your consent.",
    ],
    type: "select",
    options: [
      {
        label: "Yes, I consent",
        color: true,
      },
      "No, not now",
    ],
  },
  {
    title: "Email Address Inquiry",
    content: "To keep you updated, may I have your email address?",
    type: "input",
    placeholder: "xxxxx@gmail.com",
  },
  {
    title: "Phone Number Inquiry",
    content: "For urgent updates, please provide your phone number.",
    type: "input",
    placeholder: "(638) 263-7844",
  },
  {
    title: "Introduction to Personal Information Collection",
    content:
      "To personalize your experience, may I know your age, gender, culture, and language preference?",
  },
  {
    title: "Age Group Inquiry",
    content: "Please select your age group.",
    type: "select",
    options: ["Under 18", "18-34", "35-49", "50+"],
  },
  {
    title: "Gender Identity Inquiry",
    content: "What is your gender identity?",
    type: "select",
    options: ["Male", "Female", "Other"],
  },
  {
    title: "Cultural Background Inquiry",
    content: "Would you share your cultural background?",
  },
  {
    title: "Preferred Language Inquiry",
    content: "Which language do you prefer?",
    type: "select",
    options: ["English", "Spanish", "Other"],
  },
  {
    title: "Holistic Approach Introduction",
    content:
      "Mental health is multifaceted, involving work, family, and daily life. We'll consider all aspects of your well-being.",
  },
  {
    title: "Life Stage Inquiry",
    content: "Are you studying, working, or something else?",
    type: "select",
    options: ["Studying", "Working", "Unemployed", "Retired", "Other"],
  },
  {
    title: "Relationship Status Inquiry",
    content: "What is your current relationship status?",
    type: "select",
    options: ["Single", "In a relationship", "Married", "It's complicated"],
  },
  {
    title: "Post-Questionnaire Reassurance",
    content:
      "Thank you for your openness. You've earned 25 stars towards new sessions and resources.",
  },
  {
    title: "Introduction to the Star System",
    content:
      "Earn stars for engagement and progress. They're milestones on your growth journey.",
  },
  {
    title: "Encouragement and Motivation",
    content:
      "You're not alone. Your first step has earned you 15 stars towards meaningful progress.",
  },
  {
    title: "Transition to Program Recommendation",
    content:
      "Let's explore tailored options for your well-being journey together.",
  },
  {
    title: "Olivia's Daily Motivation and Reminder Prompt",
    content:
      "Each session you complete earns you a 'Star of Progress'. Let's celebrate your dedication and make today a win!",
  },
];

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
            data={onBoardingData}
          />
        )}
      </div>
    </div>
  );
};

export default OnBoardingPage;
