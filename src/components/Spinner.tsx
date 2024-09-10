import "./css/spinner.css"
export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-content-center SpinnerLoad">
      <div className="spinner-border customSpinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
