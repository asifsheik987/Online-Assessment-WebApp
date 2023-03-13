

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../redux/slices/AuthSlice";

function StudentList() {

  const students = useSelector(state => state.auth.userList);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());

  }, [])
  const handleResult = (e, username) => {
    e.preventDefault();
    navigate(`/student/viewResult/${username}`)

  }

  return (
    <>
      <div >
        <h2>Student List</h2>
      </div>

      <div >
        <table className="table table-hover">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>

                      <button className="btn btn-outline-primary" onClick={e => handleResult(e, data.username)}>View result</button>
                    </td>
                  </tr>
                );
              })
            }

          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;