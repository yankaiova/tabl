import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getCurrentPage } from "../model/selectors";
import { setCurrentPage } from "../model/tableSlice";

export const usePagination = () => {
  const dispatch = useDispatch();
  const current = useSelector(getCurrentPage);

  const navigateAfterClick = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch, current]
  );

  return { current, navigateAfterClick };
};
