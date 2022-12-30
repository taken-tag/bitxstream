import React from "react";
import LoginForm from "./LoginForm";
export default function HomePage() {
  return (
    <div className="bg">
      <div className="w-[70%] flex justify-between m-auto">
        <div></div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
