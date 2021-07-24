import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { doGetAllListTutor } from "../../redux";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";

export const Tutor: React.FC = () => {
  const dispatch = useAppDispatch();
  const listAllTutor = useSelector(
    (state: RootState) => state.tutorSlice.listAllTutor
  );
  console.log(listAllTutor);

  useEffect(() => {
    dispatch(doGetAllListTutor());
  }, []);
  return (
    <div>
      <h1>Tutor</h1>
    </div>
  );
};
