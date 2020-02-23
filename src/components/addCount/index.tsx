import React, { SFC } from 'react';
import { connect } from 'react-redux';

import { addNumber } from '../../redux/actions';
import { RootState } from '../../redux/store';

interface AddCountProps {
  addNumber: () => void;
  count: number;
}

const AddCount = (props: AddCountProps) => {
  const {
    count,
    addNumber,
  } = props;

  return (
    <div>
      <button type="button" onClick={addNumber}>
        Add
      </button>
      <h1>
        {count}
      </h1>
    </div>
  );
};

export default connect(
  (state: RootState) => ({
    count: state.reducer1.count,
  }), {
    addNumber,
  })(AddCount);
