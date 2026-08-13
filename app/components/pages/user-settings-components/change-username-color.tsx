"use client";

import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex } from "@uiw/color-convert";
import React, { useState } from "react";
import { changeMessageColor } from "@/utils/utils";

interface Props {
  userId: string
}

export default function ChangeUserColor({userId}: Props) {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [visibility, setVisibility] = useState<string>("hidden");

  const changeWheelVisibility = () => {
    if (visibility === "hidden") {
      setVisibility("flex");
    } else {
      setVisibility("hidden");
    }
  };

  const saveNewColor = async (e: React.FormEvent) => {
    e.preventDefault();

    await changeMessageColor(userId, hsvaToHex(hsva));
  }

  return (
    <div>
      <button onClick={changeWheelVisibility} className="px-2 py-2 mt-5 w-50 flex justify-center items-center text-md gap-2">Change Username Color</button>
      <div className={`flex-col items-center ${visibility}`}>
        <Wheel
          color={hsva}
          width={100}
          height={100}
          onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
          className="w-20 mt-4"
        />
        <div
          style={{ background: hsvaToHex(hsva) }}
          className="w-10 h-5 mt-2"
        ></div>

        <button onClick={saveNewColor} className="mt-4 px-2 py-1 w-50 save-button">
          Save Color  
        </button>
      </div>
    </div>
  );
}
