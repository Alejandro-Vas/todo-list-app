import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { todoActions } from "../store/todoSlice/todoSlice";

const AllActions = {
  ...todoActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
