import React, { useState } from "react";
import styled from "styled-components";

import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <LoginWrapper>
      <div className="container mx-auto">
        <Header />
        <Form className="bg-black bg-opacity-70 mt-5 rounded-lg mx-auto">
          <h2 className="text-white text-xl mb-10">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          <div className="mb-6">
            <input
              className="w-full rounded-sm"
              name="name"
              type="text"
              value=""
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full rounded-sm"
              name="password"
              type="password"
              value=""
            />
          </div>
          <button className="sign-in-button mb-2 w-full bg-red-600 p-2 rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm ? (
            <p className="text-white">
              New to netflix{" "}
              <span
                className="link cursor-pointer text-red-600"
                onClick={handleSignIn}
              >
                Sign Up
              </span>{" "}
              now
            </p>
          ) : (
            <p className="text-white">
              Already have account{" "}
              <span
                className="link cursor-pointer text-red-600"
                onClick={handleSignIn}
              >
                Sign In
              </span>{" "}
              now
            </p>
          )}
        </Form>
      </div>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg");
  width: 100vw !important;
  height: 100vh !important;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Form = styled.form`
  width: 400px;
  padding: 30px;

  input {
    padding: 5px;
  }

  .link {
  }
`;
