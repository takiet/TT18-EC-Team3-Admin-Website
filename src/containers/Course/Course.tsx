import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { TutorRow } from "../../components";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { doGetAllListCourse, doGetAllListTutor } from "../../redux";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Course.scss";

export const Course: React.FC = () => {
  const dispatch = useAppDispatch();
  const listAllCourse = useSelector(
    (state: RootState) => state.courseSlice.listAllCourse
  );
console.log(listAllCourse);

  useEffect(() => {
    dispatch(doGetAllListCourse());
    dispatch(doGetAllListTutor());

  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <div className="course-table">
        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "960px" }}>
              <thead>
                <tr>
                  <th className="course-table__edit"></th>
                  <th className="course-table__no-order">#</th>
                  <th className="course-table__name">Name</th>
                  <th className="course-table__phone">Phone Number</th>
                  <th className="course-table__email">Email</th>
                  <th className="course-table__button"></th>
                </tr>
              </thead>

              <tbody>
                {listAllCourse.map((item, index) => {
                  return (
                    <TutorRow
                      key={index}
                      index={index + 1}
                      name={item.name}
                      // email={item.email}
                      // phone={item.phone}
                      // avatar={item.avatar}
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
