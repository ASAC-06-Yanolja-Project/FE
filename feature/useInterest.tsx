"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Interest {
  id: number;
  name: string;
  icon: string;
}

const interests: Interest[] = [
  { id: 1, name: "호캉스", icon: "🏨" },
  { id: 2, name: "풀빌라", icon: "🏠" },
  { id: 3, name: "게스트하우스", icon: "🏘️" },
  { id: 4, name: "전원주택", icon: "🌳" },
  { id: 5, name: "비즈니스 호텔", icon: "🏢" },
  { id: 6, name: "레저", icon: "🏄" },
  { id: 7, name: "해외숙소", icon: "🕌" },
];

export const useInterest = () => {
  const router = useRouter();
  const [selectedInterest, setSelectedInterest] = useState<Interest["name"][]>(
    [],
  );

  const handleSelect = (interest: Interest["name"]) => {
    if (selectedInterest.includes(interest)) {
      // 이미 선택된 항목이면 제거
      setSelectedInterest(selectedInterest.filter((item) => item !== interest));
    } else {
      // 선택되지 않은 항목이면 추가
      setSelectedInterest([...selectedInterest, interest]);
    }
  };

  // 뒤로가기 함수
  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (selectedInterest.length === 0) {
      alert("관심사를 하나 이상 선택해주세요!");
      return;
    }
    console.log("선택된 관심사:", selectedInterest);
    router.push("/users/signup/nickname");
    localStorage.setItem("userInterest", JSON.stringify(selectedInterest));
  };
  return {
    interests,
    selectedInterest,
    handleSelect,
    handleNext,
    handleBack,
  };
};
