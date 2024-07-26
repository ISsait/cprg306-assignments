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
      <h1 className="text-2xl">Shopping List Authentication Page</h1>
      {user ? (
        // user is logged in
        <div>
          <p>Welcome {user.displayName}</p>
          <p>Email {user.email}</p>
          <img
            className="w-12 h-12 rounded-full m-2"
            src={user.photoURL}
            alt="User avatar"
          />
          <span className="text-lg bg-green-600 hover:bg-green-300 hover:underline border-solid border-2 border-yellow-300 rounded-md m-2 p-2">
            <Link href="./week-8/shopping-list/">Go To Your Shopping List</Link>
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
        <div>
          <button
            onClick={handleSignIn}
            className="text-lg border-solid border-2 border-blue-950 rounded-md bg-blue-800 hover:underline hover:bg-blue-500 p-2 m-2"
          >
            Sign In
          </button>
        </div>
      )}
      <span className="border-solid border-2 border-blue-950 rounded-md bg-blue-800 hover:underline hover:bg-blue-500 p-2 m-2">
        <Link href="./">Home</Link>
      </span>
    </div>
  );
}
