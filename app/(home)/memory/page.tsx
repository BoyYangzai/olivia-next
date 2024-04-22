"use client";
import { LikeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const MemoryPage = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center items-center">
      <div className="font-bold flex justify-center items-center flex-wrap mt-28">
        <LikeTwoTone
          twoToneColor={"#52c41a"}
          style={{
            fontSize: "4rem",
          }}
        />
        <div className="w-full text-center text-2xl mt-4">
          Looks like we do not have any records yet
        </div>
        <div className="w-full text-center mt-4 text-gray-500">
          Chat with Olivia to create your first memory!
        </div>
        <Button
          onClick={() => {
            router.push("/");
          }}
          type="primary"
          style={{
            width: "15rem",
            height: "3rem",
            marginTop: "1.6rem",
          }}
        >
          Chat now
        </Button>
      </div>
    </div>
  );
};
export default MemoryPage;
