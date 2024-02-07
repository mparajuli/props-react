import PropTypes from "prop-types";

function Student(props) {
  // Variable to hold the color for isStudent status
  const statusColor = props.isStudent ? "#008000" : "#f00";

  return (
    <div className="student">
      <p className="name">Name: {props.name}</p>
      <p className="age">Age: {props.age}</p>
      <p className="status" style={{ color: statusColor }}>
        Student: {props.isStudent ? "Yes" : "No"}
      </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
