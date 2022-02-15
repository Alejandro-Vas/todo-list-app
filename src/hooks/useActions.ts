import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const AllActions = {};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
