import React from 'react';

function Accordion({ children }) {
  return (
    <div data-testid="accordion">
      {children}
    </div>
  );
}

export default Accordion;