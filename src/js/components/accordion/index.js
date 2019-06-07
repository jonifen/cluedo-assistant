import React, { useState } from 'react';
import SectionHeader from './section-header';

function Accordion({ headingText, children }) {
  const [isVisible, setIsVisible] = useState(true);
  function onClickEvent(e) {
    setIsVisible(!isVisible);
  }

  const visibilityClassName = isVisible ? "" : "hidden";

  return (
    <div data-testid="accordion">
      <SectionHeader headingText={headingText} onClickEvent={onClickEvent} />
        <div className={visibilityClassName}>
          {children}
        </div>
    </div>
  );
}

export default Accordion;