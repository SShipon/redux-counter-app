import React from "react";
import { increment, decrement } from "../../redux/counter/actions.js";
import { connect } from "react-redux";
function Counter({ count, increment, decrement }) {
  return (
    <div class="container">
      <div class="w-50 mx-auto my-5">
        <div class="card text-center shadow-lg p-3 bg-body rounded">
          <div class="card-body">
            <h5 class="card-title fw-bold my-2">
              Simple <span class="text-success">Counter</span> Application
            </h5>
            <h4 class="card-text text-bold fw-bold" id="counterEl">
              {count}
            </h4>
            <button href="#" class="btn btn-success mx-2" onClick={increment}>
              Increment
            </button>
            <button href="#" class="btn btn-danger" onClick={decrement}>
              Decrement
            </button>
          </div>
        </div>
        <div class="d-flex my-2">
          <button href="#" class="btn btn-primary mx-2 ms-auto" id="addCounter">
            +Add Counter count
          </button>
          <button href="#" class="btn btn-danger" id="rest">
            Rest helllo
          </button>
          {/* updated:fire: */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
