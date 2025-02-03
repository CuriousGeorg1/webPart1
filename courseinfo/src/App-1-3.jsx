import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  console.log("Hello");

  const Header = (props) => {
    return (
      <header>
        <h1>{props.course}</h1>
      </header>
    );
  };

  const Content = (props) => {
    console.log(props);
    return (
      <div>
        <Part name={props.part1.name} exercises={props.part1.exercises} />
        <Part name={props.part2.name} exercises={props.part2.exercises} />
        <Part name={props.part3.name} exercises={props.part3.exercises} />
      </div>
    );
  };

  const Part = (props) => {
    console.log(props);
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };

  const Total = (props) => {
    return (
      <p>
        Number of exercises{" "}
        {props.exercises1.exercises +
          props.exercises2.exercises +
          props.exercises3.exercises}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1} exercises2={part2} exercises3={part3} />
    </div>
  );
};

export default App;
