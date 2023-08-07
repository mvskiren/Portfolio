import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Cognizant() {
  const tasks = [
    {
      text: `I have been responsible for designing and implementing the frontend components of the chatbot system empowered
      by chatGPT. Worked closely with the backend team to ensure seamless integration and smooth user experience.This project has proven to be highly impactful, positively influencing the company’s sales and revenue.`,
      keywords: ["chatGPT", "sales and revenue"],
    },
    {
      text: "Actively involved in stakeholder discussions, and day-to-day activities and followed agile methodology forcontinuous improvement.",
      keywords: ["agile"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer - Pearson{" "}
            <span className="text-AAsecondary">@ ReactJS, NextJs</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            April 2023 - Current, India
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open(
                "https://www.pearson.com/en-us/pearsonplus.html",
                "_blank"
              )
            }
          >
            https://www.pearson.com/en-us/pearsonplus.html
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
