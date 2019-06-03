import React from 'react';

function Section({ children }) {
  return (
    <div data-testid="accordion-section">
      {children}
    </div>
  );
}

export default Section;