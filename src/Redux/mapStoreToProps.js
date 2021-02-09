// also sometimes named 'mapStateToProps', 'mapReduxStateToProps', 'mapState'
// (i.e. this is 'taco', but it demonstrates why naming conventions matter)
//
const mapStoreToProps = (reduxState) => {
  return {
    // reduxState properties bound to "props.store"
    // ---------
    store: reduxState,
  };
};

export default mapStoreToProps;
