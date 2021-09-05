import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TutorRow } from "../../components";
import { Button } from "../../components/common";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { doDeleteTutor, doGetAllListTutor } from "../../redux";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Tutor.scss";

export const Tutor: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
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
        onClick={() => history.push("/add-tutor")}
      >
        ADD
      </Button>
      <div className="tutor-table">
        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "960px" }}>
              <thead>
                <tr>
                  {/* <th className="tutor-table__edit"></th> */}
                  <th className="tutor-table__no-order">#</th>
                  <th className="tutor-table__name">Name</th>
                  <th className="tutor-table__phone">Phone Number</th>
                  <th className="tutor-table__email">Email</th>
                  <th className="tutor-table__rating">Rating</th>
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
                      rating={item.rating}
                      onClickDelete={() => {
                        dispatch(doDeleteTutor({ uid: item._id }));
                      }}
                      onClick={() => history.push(`/tutor-detail/${item._id}`)}
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
