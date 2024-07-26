"use client";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";


export default function protectedPage (){

    const {user} = useUserAuth();

    return (
        <div>
            <h1 className="text-3xl">Protected Page</h1>
            {user ? (
                <div>
                    <p>Your user id is: {user.uid}</p>
                </div>
            ) : (
                <div>
                    <p>You must be logged in to view this page</p>
                    <Link href="/week8/">Click here to return to the sign in page</Link>
                </div>
            ) }
        </div>
    );
}