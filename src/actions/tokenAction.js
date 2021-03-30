const tokenAction = () => (dispatch) => {
  if (sessionStorage.getItem("token") !== null) {
    dispatch({ type: "token", payload: sessionStorage.getItem("token") });
  }
};

export default tokenAction;
