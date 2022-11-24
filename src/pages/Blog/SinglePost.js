import React from "react";

const SinglePost = ({ posts }) => {
  const { id, qus, ans } = posts;
  return (
    <div className="w-11/12 md:w-9/12 lg:w-6/12 p-5 m-auto border mb-6  rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-blue-900">
        Q{id}-{qus}
      </h1>
      <p className="text-gray-500">{ans}</p>
    </div>
  );
};

export default SinglePost;
