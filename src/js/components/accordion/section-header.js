import React from 'react';

function SectionHeader({ headingText, onClickEvent }) {
  function onClickHeader(e) {
    if (onClickEvent)
      onClickEvent(e);
  }

  return (
    <div className="sectionHeader" data-testid="accordion-section-header" onClick={onClickHeader}>
      {headingText}
    </div>
  );
}

export default SectionHeader;