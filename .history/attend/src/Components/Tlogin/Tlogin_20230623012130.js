import React, { useEffect } from "react";
import useState from "react-usestateref";
import { Link, useNavigate } from "react-router-dom";
import "./Tlogin.css";
import Globe from "../../svgs/globe.jsx";
const Tlogin = (props) => {
  // To open and close the sidebar
  const [size, setsize, sizeRef] = useState(600);

  const navigate = useNavigate();
  const currUser = props.userData;

  //jwt authorisation
  const callTlogin = async () => {
    try {
      const res = await fetch("/aftertlogin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      props.setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        // navigate("/tlogin");
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginteach");
    }
  };

  //logout functionality
  const handlelogout = () => {
    fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate("/loginteach");
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callTlogin();
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <h3 className="text-3xl font-extrabold text-gray-300 mb-6 ml-10 text-center">
        Welcome Prof. {currUser.name}
      </h3>
      <div className="flex flex-wrap justify-center">
        <div className="ml-5 flex flex-col">
          <div className="">
            <div className="w-3/4 h-48 md:w-full md:max-w-md md:h-auto mb-4 md:mb-10">
              <div className="block p-6 rounded-lg shadow-lg bg-gray-600 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4 ">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label text-white text-2xl font-extrabold inline-block "
                  >
                    CREATE NEW STUDENT
                  </label>
                </div>
                <p className="text-white font-semibold mb-2 ">
                  Register New Students for their respective subjects and
                  branches
                </p>
                <Link to="/createattend">
                  <button
                    type="button"
                    className="inline-block px-4 py-1.5 text-extrabold bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                  >
                    Create
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-3/4 h-48 md:w-full md:max-w-md md:h-auto mb-4 md:mb-10">
              <div className="block p-6 rounded-lg shadow-lg bg-gray-600 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4 ">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label text-white text-2xl font-extrabold inline-block "
                  >
                    UPDATE STUDENT DETAILS
                  </label>
                </div>
                <p className="text-white font-semibold mb-2 ">
                  Update the existing students enrolled in thier respective
                  courses
                </p>
                <Link to="/selectstud">
                  <button
                    type="button"
                    className="inline-block px-4 py-1.5 text-extrabold bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                  >
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-3/4 h-48 sm:mt-3 md:w-full md:max-w-md md:h-auto mb-4 md:mb-10">
              <div className="block p-6 rounded-lg shadow-lg bg-gray-600 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4 ">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label text-white text-2xl font-extrabold inline-block "
                  >
                    TAKE ATTENDANCE
                  </label>
                </div>
                <p className="text-white font-semibold mb-2 ">
                  Take Attendance for the students enrolled in respective
                  courses
                </p>
                <Link to="/takeattend">
                  <button
                    type="button"
                    className="inline-block px-4 py-1.5 text-extrabold bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                  >
                    Take
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tlogin;
