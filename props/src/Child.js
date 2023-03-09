import React from "react";
import PropTypes from "prop-types";
const Child = ({ name, age, list, greeting, children }) => {
  return (
    <div>
      {" "}
      <h2>
        hello my name is {name} my age is {age}
      </h2>
      <div>
        {list.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
      <button onClick={() => greeting()}>Click here</button>
      {children}
    </div>
  );
};
Child.propTypes = {
  name: PropTypes.number,
  age: PropTypes.array,
  list: PropTypes.array,
};
Child.defaultProps = { name: "Mounir" };
export default Child;
