import React from 'react';


const MoreInfo = ({title="What will happen?", content}) => {
  return (
    <div
      className="mt-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700 px-4 py-3"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p className="text-sm">{content}
      </p>
    </div>
  );
};

export default MoreInfo;