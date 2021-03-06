import React from "react";
import { Link } from "react-router-dom";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Students = () => {
  const firestore = useFirestore();
  const students = useSelector((state) => state.firestore.ordered.students);
  useFirestoreConnect([
    {
      collection: "students",
      orderBy: ["createdAt" , "desc"],
    },
  ]);
  if (!students) {
    return <h1>Loading...</h1>;
  }

  const deleteStudent = async (id) =>{
    try {
      await firestore.collection("students").doc(id).delete();
    } catch (error) {
      alert("Error:" , error);
    }
  }
  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          {students.map((student) => (
            <div className="col-lg-3 col-md-6 mb-4" key={student.id}>
              <div className="card shadow text-center py-4">
                <img
                  src={`https://joeschmoe.io/api/v1/male/${student.id}`}
                  height="100px"
                  alt="profile-pic"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">{student.name}</h5>
                  <p className="text-muted small">{student.email}</p>
                  <Link
                    to={`/student/${student.id}`}
                    className="btn btn-primary btn-profile"
                  >
                    View Profile
                  </Link>
                  <button className="btn btn-edit" onClick={() => deleteStudent(student.id)}>
                    <span className="material-icons">delete_outline</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
