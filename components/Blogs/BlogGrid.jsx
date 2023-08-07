import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import MediumIcon from "../Icons/MediumIcon";
// import "./Blogs.css";

const blogData = [
  {
    title: "React Testing with RTL and Jest",
    description: "Test React app with RTL and Jest",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*54_uCiFpFEGzXfhW",
    href: "https://mvskiran.medium.com/testing-react-apps-with-jest-and-react-testing-library-rtl-1c204e44259f",
    tags: ["React, Jest"],
  },
  {
    title: "Demystifying useCallback() hook!",
    description: "Demystifying useCallback() hook! When to use it?",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*NjRtCDtACPPizTueG87pTw.png",
    href: "https://mvskiran.medium.com/demystifying-usecallback-hook-when-to-use-it-9bdecfdcc9b9",
    tags: ["React, Hooks, useCallback"],
  },
  {
    title: "All about Web Accessibility | 2021",
    description: "Build Accessible web applications - a11y",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*upAA4X1eEjok_qi4n4-pnw.gif",
    href: "https://mvskiran.medium.com/front-end-development-all-about-web-accessibility-2021-92f243154853",
    tags: ["Web, A11y"],
  },
  {
    title: "What problem does WebPack solve?",
    description:
      "What problem does WebPack solve? How it Empowers the production build?",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*7ToXiRYVV1P8OwtlFAdJ8Q.gif",
    href: "https://mvskiran.medium.com/why-webpack-what-problem-does-it-solve-8d9642e65937",
    tags: ["React", "Webpack"],
  },
  {
    title: "What exactly is Hoisting in JS?",
    description: "Hoisting - A must-know concept for Javascript developers!",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VBblIK9rgKzx3iTj6cTbKA.png",
    href: "https://mvskiran.medium.com/hoisting-a-must-know-concept-for-javascript-developers-73a6b64bf3fe",
    tags: ["Javascript, Browser"],
  },
  // Add more blog data here...
];

const BlogCard = ({ title, description, imageUrl, href, tags }) => {
  return (
    <div onClick={() => window.open(href, "_blank")} className="blog-card">
      <div className="blog-image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="blog-content">
        <h3 style={{ minHeight: "48px" }}>{title}</h3>
        <p style={{ fontSize: "12px", color: "gray", minHeight: "36px" }}>
          {description}
        </p>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          listStyle: "none",
          color: "gray",
          opacity: "0.8",
          padding: "5px 16px",
        }}
      >
        Tags:
        {tags.map((item) => (
          <li
            key={item}
            style={{
              fontSize: "14px",
              margin: "0px 10px",
              color: "rgb(100 255 218 / var(--tw-bg-opacity))",
            }}
          >
            {item}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogGrid = () => {
  return (
    <>
      <p
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
          color: "whitesmoke",
          paddingTop: "100px",
        }}
      >
        Blogs
      </p>
      <div className="blog-grid">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            href={blog.href}
            tags={blog.tags}
          />
        ))}
      </div>
    </>
  );
};

export default BlogGrid;
