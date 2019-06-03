import React from 'react';

function SectionHeader({children, onClickEvent}) {
  return (
    <div data-testid="accordion-section-header" onClick={onClickEvent}>
      { children }
    </div>
  );
}

export default SectionHeader;