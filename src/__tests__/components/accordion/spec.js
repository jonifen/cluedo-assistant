import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Accordion from '../../../js/components/accordion/index';
import '@testing-library/jest-dom/extend-expect';

describe('<Accordion />', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    render(<Accordion />);
  });

  it('should be included in the document after render', () => {
    const { getByTestId } = render(<Accordion />);
    expect(getByTestId('accordion')).toBeInTheDocument();
  });

  it('should include a child after render', () => {
    const { getByTestId } = render(
      <Accordion>
        <p data-testid='child-element'>child</p>
      </Accordion>
    );
    expect(getByTestId('child-element')).toBeInTheDocument();
  });

  it('should include a SectionHeader after render', () => {
    const { getByTestId } = render(
      <Accordion headingText='Heading' />
    );
    const sectionHeader = getByTestId('accordion-section-header');
    expect(sectionHeader).toBeInTheDocument();
    expect(sectionHeader).toHaveTextContent('Heading');
  });
});