import React from "react";
import { Frame } from "./Frame";
import { FrameWrapper } from "./FrameWrapper";
import image from "./image.svg";
import vector from "./vector.svg";

export const Element = () => {
  return (
    <div className="bg-[#06070b] overflow-hidden w-full min-w-[402px] min-h-[874px] flex flex-col">
      <div className="flex -ml-px h-11 w-[403px] self-center relative mt-[72px] items-center justify-between px-6 py-0">
        <div className="inline-flex h-[var(--semantic-colors-spacing-11)] items-center justify-center gap-[var(--semantic-colors-spacing-3)] pt-[var(--semantic-colors-spacing-0)] pr-[var(--semantic-colors-spacing-3)] pb-[var(--semantic-colors-spacing-0)] pl-[var(--semantic-colors-spacing-3)] relative flex-[0_0_auto] bg-[#1c1c27] rounded-[var(--semantic-colors-border-radius-full)]">
          <div className="relative w-6 h-6 aspect-[1]">
            <img
              className="absolute w-[64.89%] h-[63.18%] top-[18.44%] left-[18.44%]"
              alt="Vector"
              src={vector}
            />
          </div>
        </div>

        <div className="relative w-fit font-text-medium-lg-18px font-[number:var(--text-medium-lg-18px-font-weight)] text-white text-[length:var(--text-medium-lg-18px-font-size)] tracking-[var(--text-medium-lg-18px-letter-spacing)] leading-[var(--text-medium-lg-18px-line-height)] whitespace-nowrap [font-style:var(--text-medium-lg-18px-font-style)]">
          My Music
        </div>

        <div className="inline-flex h-[var(--semantic-colors-spacing-11)] items-center justify-center gap-[var(--semantic-colors-spacing-3)] pt-[var(--semantic-colors-spacing-0)] pr-[var(--semantic-colors-spacing-3)] pb-[var(--semantic-colors-spacing-0)] pl-[var(--semantic-colors-spacing-3)] relative flex-[0_0_auto] bg-[#1c1c27] rounded-[var(--semantic-colors-border-radius-full)]">
          <div className="relative w-6 h-6 aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[16.67%] top-[41.67%] left-[12.50%]"
              alt="Vector"
              src={image}
            />
          </div>
        </div>
      </div>

      <Frame />
      <FrameWrapper />
    </div>
  );
};