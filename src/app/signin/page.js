"use client"
import React, { useEffect, useRef, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

function Login() {
    return(
        <main>
            <div>
                <button onClick={() => signIn()}>
                    Sign In
                </button>
            </div>
        </main>
    )

}

export default Login;