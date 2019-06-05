import React, { useState } from 'react';
import SectionHeader from './section-header';

function Accordion({ headingText, children }) {
  const [isVisible, setIsVisible] = useState(false);
  function onClickEvent(e) {
    setIsVisible(!isVisible);
  }

  return (
    <div data-testid="accordion">
      <SectionHeader headingText={headingText} onClickEvent={onClickEvent} />
      {children}
    </div>
  );
}

export default Accordion;