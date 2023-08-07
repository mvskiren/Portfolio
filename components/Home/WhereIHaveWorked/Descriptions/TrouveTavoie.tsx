import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Responsible for Implementing new features, fixing bugs, and converting wireframes into code.",
      keywords: ["new features"],
    },
    {
      text: "Developed reusable components using React frameworks in MVVM Architecture and also followed continuous testing with Jest and Enzyme, and ensured accessibility and search engine optimization. Collaborated with distributed teams and cross-functional teams in an agile development environment to achieve project goals.",
      keywords: [
        "MVVM Architecture",
        "Jest",
        "Enzyme",
        "distrubuted teams",
        "accessibility",
        "agile",
      ],
    },
    {
      text: "Interfaced with developers on a daily basis, providing technological expertise.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer- British Telecommunications - (United Kingdom){" "}
            <span className="text-AAsecondary">@ ReactJS</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            June - October 2021, India
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.trouvetavoie.io/", "_blank")
            }
          >
            www.tcs.com
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
