import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "../../components/common";
import { TutorRow } from "../../components";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { doGetAllListTutor } from "../../redux";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Tutor.scss";

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
    <div className="container">
      <div className="tutor-table">
        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "960px" }}>
              <tr>
                <th className="tutor-table__edit"></th>
                <th className="tutor-table__no-order">#</th>
                <th className="tutor-table__name">Name</th>
                <th className="tutor-table__phone">Phone Number</th>
                <th className="tutor-table__email">Email</th>
                <th className="tutor-table__button"></th>
              </tr>
              {listAllTutor.map((item, index) => {
                return (
                  <TutorRow
                    index={index + 1}
                    name={item.name}
                    email={item.email}
                    phone={item.phone}
                  />
                );
              })}
            </table>
          </div>
        </ScrollHorizontal>
      </div>
    </div>
  );
};
