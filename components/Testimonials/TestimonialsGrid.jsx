import React, { useState } from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

const testimonialData = [
  {
    name: "Pal David",
    designation: "Senior Frontend Engineer",
    content:
      "I have had the distinct pleasure of having Kiran as a colleague at BT. He has a very strong work ethic and excellent problem solving skills. Kiran is dedicated, self-motivated, and very capable. He is a colleague the team can always rely upon. It was a privilege to work with him.",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQFUi0uAW7FYcg/profile-displayphoto-shrink_400_400/0/1524041121126?e=1697068800&v=beta&t=o8OG32fLbKIIIAwz1dpIXu_0DFsXtB2Ff4Ae3a4BzmY",
    linkedInUrl: "https://www.linkedin.com/in/plaloop/ ",
  },
  {
    name: "Mellina Yonashiro",
    designation: "FrontEnd Developer",
    content:
      "We worked together for a while in a very complex project. In that scenario, Kiran was very kind, hardworking, always trying to understand the the system requirements. He did not hesitate to contact stakeholders and solve problems. He would be a great asset to any team.",
    imageUrl:
      "https://media.licdn.com/dms/image/D4E03AQFrwEWIxRbVzg/profile-displayphoto-shrink_400_400/0/1686338946509?e=1697068800&v=beta&t=0J9YWYrBMKnIOMbnNj2cHm_94ZEnIr1nES3eog4zSHg",
    linkedInUrl: "https://www.linkedin.com/in/yogmel/",
  },
  {
    name: "Rishi Bayisetti",
    designation: "Software Developer",
    content:
      "MVS is workaholic and proficient in technical skills very well. I would recommend MVS to be part in any kind of front end role or in any full stack platform which is helpful for the organisation to full fill their needs !",
    imageUrl:
      "https://media.licdn.com/dms/image/D5635AQF5_J6zZQ5gUw/profile-framedphoto-shrink_800_800/0/1673209620184?e=1692000000&v=beta&t=Ox4S7L7NQP3XM0YK6I5NB-9u7nmq8atliO0bRznUyyI ",
    linkedInUrl: "https://www.linkedin.com/in/rishidhar-bayisetti-10256a122/",
  },
  // Add more sample testimonial data here...
];

const TestimonialCard = ({
  name,
  designation,
  content,
  imageUrl,
  linkedInUrl,
}) => {
  return (
    <figure
      className="snip1192"
      onClick={() => window.open(linkedInUrl, "_blank")}
    >
      <blockquote>
        {content}
        <span
          style={{
            width: "20px",
            height: "20px",
            display: "block",
            position: "absolute",
            right: "20px",
            bottom: "10px",
            opacity: "0.9",
            cursor: "pointer",
          }}
        >
          <LinkedinIcon />
        </span>
      </blockquote>
      <div className="author">
        <img src={imageUrl} alt="sq-sample1" />
        <h5>
          {name} <span> {designation}</span>
        </h5>
      </div>
    </figure>
  );
};

const TestimonialsGrid = () => {
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
        }}
      >
        Testimonials
      </p>
      <div className="testimonial-grid">
        {testimonialData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            designation={testimonial.designation}
            content={testimonial.content}
            imageUrl={testimonial.imageUrl}
            linkedInUrl={testimonial.linkedInUrl}
          />
        ))}
      </div>
    </>
  );
};

export default TestimonialsGrid;
