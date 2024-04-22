"use client";

import Image from "next/image";
import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
const Login = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/onboarding");
    setCookie("session", "value");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="w-80 flex justify-center items-center flex-wrap">
        <div className="w-full flex justify-center">
          <Image src="/gif/login.gif" alt="" width={100} height={100}></Image>
        </div>
        <Form layout={"vertical"} form={form} className="w-full">
          <Form.Item label="Member email" className="font-bold">
            <Input placeholder="username" className="h-10 font-medium" />
          </Form.Item>
          <Form.Item label="PassWord" className="font-bold">
            <Password placeholder="password" className="h-10 font-medium" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{
                height: "2.5rem",
                fontWeight: "bold",
              }}
              onClick={handleLogin}
            >
              Hello Olivia
            </Button>
          </Form.Item>
        </Form>
        <Link className="w-full text-xs text-[#8b8b8b]" href="/signup">
          New here? Start the journey now
        </Link>
      </div>
    </div>
  );
};

export default Login;
