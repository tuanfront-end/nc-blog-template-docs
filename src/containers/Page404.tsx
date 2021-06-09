import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="prose prose-lg flex flex-col items-center justify-center mx-auto p-20">
      <h1>404</h1>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Page404;
