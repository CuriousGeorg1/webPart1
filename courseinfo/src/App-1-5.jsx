import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = ({ course }) => {
    console.log("Course: ", course);
    return (
      <header>
        <h1>{course.name}</h1>
      </header>
    );
  };

  const Content = ({ course }) => {
    return (
      <>
        {course.parts.map(
          (part, index) => (
            console.log(part),
            (<Part key={index} name={part.name} exercises={part.exercises} />)
          )
        )}
      </>
    );
  };

  const Part = ({ name, exercises }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    );
  };

  const Total = ({ course }) => {
    const parts = course.parts;
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p>Number of exercises {total}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
