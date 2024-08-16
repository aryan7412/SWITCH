import React from 'react';

const Heading = ({ level = 1, children, className = '' }) => {
  const Tag = `h${level}`;

  return (
    <Tag className={`text-center text-4xl font-light tracking-wider pb-2 pt-6  ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
