"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function PasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm();

  const password = watch("password");
  const passwordConfirm = watch("passwordConfirm");

  const onClickBack = () => {
    console.log("history back");
  };

  // 비밀번호와 비밀번호 확인이 일치 할 경우에만 비밀번호 변경 활성화
  return (
    <div>
      <div className="flex w-full flex-col gap-2 px-5 pt-[57px]">
        <button onClick={onClickBack}>
          <img src="/ic_back.png" alt="뒤로가기" />
        </button>
        <div className="text-[40px] text-[#8728ff]">새 비밀번호</div>
        <div className="text-[16px]">
          <b>새 비밀번호</b>를 설정해 주세요!
        </div>
        <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <Input
            id="password"
            type="password"
            className="my-1 text-sm"
            placeholder="비밀번호(영문과 숫자로 8자 이상)"
            maxLength={16}
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: /^[A-Za-z0-9]{8,16}$/,
                message: "영문과 숫자로 8자 이상 입력해 주세요.",
              },
              minLength: { value: 8, message: "8자리 이상 입력해 주세요." },
            })}
          />
          {errors.password && (
            // <small>{errors.password.message}</small>
            // REVIEW: HTML로 스타일을 조정하는 것은 관심사 분리 원칙에 어긋남
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small#notes
            <span className="text-sm">{errors.password.message}</span>
          )}
          <Input
            id="passwordConfirm"
            type="password"
            className="my-1 text-sm"
            placeholder="비밀번호 확인"
            maxLength={16}
            {...register("passwordConfirm", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: /^[A-Za-z0-9]{8,16}$/,
                message: "영문과 숫자로 8자 이상 입력해 주세요.",
              },
              minLength: { value: 8, message: "8자리 이상 입력해 주세요." },
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "비밀번호가 일치하지 않습니다.";
                },
              },
            })}
          />
          {errors.passwordConfirm && (
            <span className="text-sm">{errors.password.message}</span>
          )}
          <Button
            className="my-4 w-full"
            type="submit"
            disabled={isSubmitting || !password || !passwordConfirm}
          >
            비밀번호 변경
          </Button>
        </form>
      </div>
    </div>
  );
}
