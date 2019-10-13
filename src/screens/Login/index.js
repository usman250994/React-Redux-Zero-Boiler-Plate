import React from 'react';
import './index.css';
import { connect } from "redux-zero/react";
import actions from "../../actions";

const mapToProps = ({ count }) => ({ count });

const login = ({ count, incrementA, decrementC }) => {
  // const classes = styles();
  return (
    <div><p>HEllo World!: {count}</p>
      <div>
        <button onClick={decrementC}>decrement</button>
        <button onClick={incrementA}>increment</button>
      </div>
    </div>
  )
};

export default connect(mapToProps, actions)(login);

