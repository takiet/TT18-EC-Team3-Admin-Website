import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { TutorRow } from "../../components";
import { Button } from "../../components/common";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { doAddTutor, doGetAllListTutor } from "../../redux";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Tutor.scss";

export const Tutor: React.FC = () => {
  const dispatch = useAppDispatch();
  const listAllTutor = useSelector(
    (state: RootState) => state.tutorSlice.listAllTutor
  );

  useEffect(() => {
    dispatch(doGetAllListTutor());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <Button
        type="submit"
        marginBottom={16}
        onClick={() =>
          // dispatch(
          //   doAddTutor({
          //     "DOB.day": "24",
          //     "DOB.month": "08",
          //     "DOB.year": "2000",
          //     email: "takiet248@gmail.com",
          //     name: "Anh Kiet Tran",
          //     phone: "0913910683",
          //     avatar:
          //       "data:image/jpeg;base64,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",
          //   })
          // )
          console.log("hihi")
        }
      >
        ADD
      </Button>
      <div className="tutor-table">
        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "960px" }}>
              <thead>
                <tr>
                  <th className="tutor-table__edit"></th>
                  <th className="tutor-table__no-order">#</th>
                  <th className="tutor-table__name">Name</th>
                  <th className="tutor-table__phone">Phone Number</th>
                  <th className="tutor-table__email">Email</th>
                  <th className="tutor-table__button"></th>
                </tr>
              </thead>

              <tbody>
                {listAllTutor.map((item, index) => {
                  return (
                    <TutorRow
                      key={index}
                      index={index + 1}
                      name={item.name}
                      email={item.email}
                      phone={item.phone}
                      avatar={item.avatar}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollHorizontal>
      </div>
    </div>
  );
};
