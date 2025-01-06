"use client";

import "@/app/index.css";
import LoginHeader from "@/components/LoginHeader";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { formatHyphenToDot } from "@/feature/FormatText";

export default function FindIdEmail() {
  const email = useSelector((state: RootState) => state.user.email);
  const createdAt = useSelector((state: RootState) => state.user.createdAt);
  const formattedCreatedAt = formatHyphenToDot(createdAt);

  const router = useRouter();

  const pageRouter = (url) => {
    router.push(url);
  };

  return (
    <div className="tracking-negative flex h-screen w-full justify-center bg-gray-100 font-sans">
      <div className="relative w-[360px] bg-white">
        {/* <div className="absolute w-full"> */}
        <LoginHeader titleText={"아이디 찾기"} prevUrl={"/users/findId"} />
        <div className="relative left-5 top-[83px]">
          회원님이 가입하신 아이디 이력입니다.
        </div>
        <div className="relative left-5 top-[109px] w-[320px]">
          <div className="h-[78px] w-[320px] rounded-lg bg-gray-100 px-[20px] py-[15px]">
            <div className="mb-1 font-semibold leading-[23px] text-gray-900">
              {email}
            </div>
            <div className="text-xs font-normal leading-[17px] text-gray-500">
              {formattedCreatedAt}
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-5 flex w-[320px] gap-2">
          <button
            className="h-[50px] w-[156px] rounded-md bg-gray-400 font-semibold leading-[23px] text-white"
            onClick={() => pageRouter("/users/passwd")}
          >
            비밀번호 찾기
          </button>
          <button
            className="h-[50px] w-[156px] rounded-md bg-purple-600 font-semibold leading-[23px] text-white"
            onClick={() => pageRouter("/users/login")}
          >
            로그인하기
          </button>
        </div>
      </div>
    </div>
  );
}
