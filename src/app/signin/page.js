"use client"
import React, { useEffect, useRef, useState } from "react";
import { signIn,signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Login() {
    const { data: session } = useSession();
    console.log(session)
    return(
        <main>
            <div>
                <button onClick={() => signIn()}>
                    Sign In
                </button>
            </div>
            <div>
                <button onClick={() => signOut()}>
                    Sign Out
                </button>
            </div>
        </main>
    )

}

export default Login;