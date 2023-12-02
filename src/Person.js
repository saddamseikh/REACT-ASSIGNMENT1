import React from "react";

export default function Person(props) {
  const { name, age } = props;
  return (
    <p>
      {name} is {age} years old
    </p>
  );
}
