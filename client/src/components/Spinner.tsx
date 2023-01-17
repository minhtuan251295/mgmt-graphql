import * as React from 'react';

interface ISpinnerProps {}

const Spinner: React.FunctionComponent<ISpinnerProps> = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
