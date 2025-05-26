import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLoggedInUser } from "./utils/loggedInUserSlice";
import { useRouter } from "next/router";
import { useHydration } from "./hooks/useHydration";

const DashboardLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const hydrated = useHydration();
  if (!hydrated) return null; // or a loading spinner

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(false);
    // Handle login logic here
    if (userId === "gold@ripuraj" && password === "gold@ripuraj") {
      dispatch(changeLoggedInUser(true));
      router.push("/dashboard");
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6 text-black">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700">
              Enter ID
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              className="w-full text-black px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full text-black px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMsg && (
            <p className="text-red-500 mb-6">Invalid Id & Password</p>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardLogin;
