import React from 'react';

export default function SectionHeading({ en, zh }) {
  return (
    <div className="mb-12 text-center md:text-left">
      <h3 className="section-heading-en">
        {en}
      </h3>
      <h2 className="section-heading-zh">
        {zh}
      </h2>
    </div>
  );
}