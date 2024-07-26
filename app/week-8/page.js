"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function SignInPage(){

    const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn (){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    async function handleSignOut (){
        try {
           await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    };

    //console.dir(user); // sensitive user data

    return (
        <div>
            <h1 className="text-2xl">Shopping List Authentication Page</h1>
            { user ? (
                // user is logged in
                <div>
                    <p>Welcome {user.displayName}</p>
                    <p>Email {user.email}</p>
                    <img className="w-8 h-8 rounded-full" src={user.photoURL}/>
                    <p className="bg-green-600 hover:bg-green-300 border-solid border-yellow-300 rounded-sm">
                        <Link href="./week-8/shopping-list/">Shopping List</Link>
                    </p>
                    <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>                    
                </div>
            ) : (
                // user is not logged in
                <div>
                    <button onClick={handleSignIn} className="text-lg m-2 hover:underline">Sign In</button>                    
                </div>
            ) }
            <div>
                <Link href="./">Home</Link>
            </div>
        </div>
    );
}