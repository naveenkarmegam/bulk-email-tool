// Toast.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFunctionality } from "../redux/app/state";  // Correct import
import { hideToast } from "../redux/global/functionalSlice";  // Correct import

const Toast = () => {
  const dispatch = useDispatch();
  const { toast } = useSelector(selectFunctionality);  // Correct selector
  const handleClose = () => {
    dispatch(hideToast());
  };

  return (
    <div className={`toast position-fixed bottom-0 end-0 mb-4 me-4 ${toast.visible ? "show" : ""}`}>
      <div className={`toast-header bg-${toast.type}`}>
        <strong className="me-auto text-white">Notification</strong>
        <button type="button" className="btn-close" onClick={handleClose}></button>
      </div>
      <div className="toast-body">{toast.message}</div>
    </div>
  );
};

export default Toast;
