import { useSelector } from "react-redux";

export const getTextStatusById = (statusId) => {
  const { status } = useSelector((state) => state.request);
  let textStatus;
  status.forEach((s) => {
    if (s._id === statusId) {
      textStatus = s.status;
      return;
    }
  });

  return textStatus;
};
