"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  //console.dir(user); // sensitive user data

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-center m-10">
        Shopping List Authentication Page
      </h1>
      {user ? (
        // user is logged in
        <div className="flex flex-col items-center">
          <p>Welcome {user.email}</p>
          <img
            className="w-12 h-12 rounded-full m-2"
            src={user.photoURL}
            alt="User avatar"
          />
          <span className="text-lg bg-green-600 hover:bg-green-300 hover:underline border-solid border-2 border-yellow-300 rounded-md m-2 p-2">
            <Link href="./week-10/shopping-list/">Go To Your Shopping List</Link>
          </span>
          <span>
            <button
              onClick={handleSignOut}
              className="text-lg border-solid border-2 border-blue-950 rounded-md bg-blue-800 hover:underline hover:bg-blue-500 p-2 m-2"
            >
              Sign Out
            </button>
          </span>
        </div>
      ) : (
        // user is not logged in
        <div className="flex flex-col items-center">
          <button
            onClick={handleSignIn}
            className="text-lg border-solid border-2 border-blue-950 rounded-md bg-blue-800 hover:underline hover:bg-blue-500 p-2 m-2"
          >
            Sign In
          </button>
        </div>
      )}
      <footer className="flex flex-col items-center fixed bottom-10 w-full">
        <p>
          <Link
            className="border-solid border-2 border-blue-950 rounded-md bg-blue-800 hover:underline hover:bg-blue-500 p-2 m-2"
            href="./"
          >
            Home
          </Link>
        </p>
      </footer>
    </div>
  );
}
