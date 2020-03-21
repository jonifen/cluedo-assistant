import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SectionHeader from '../../../js/components/accordion/section-header';
import '@testing-library/jest-dom/extend-expect';

describe('<SectionHeader />', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    render(<SectionHeader />);
  });

  it('should be included in the document after render', () => {
    const { getByTestId } = render(<SectionHeader />);
    expect(getByTestId('accordion-section-header')).toBeInTheDocument();
  });

  it('should include the text "hello" in the component after render', () => {
    const { getByTestId } = render(
      <SectionHeader headingText="hello" />
    );
    const headingElement = getByTestId('accordion-section-header');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('hello');
  });

  it('should run the onClickEvent function when clicked', () => {
    const onClickEvent = jest.fn();
    const { getByTestId } = render(
      <SectionHeader headingText="hello" onClickEvent={onClickEvent} />
    );
    const sectionHeaderElement = getByTestId('accordion-section-header');
    fireEvent.click(sectionHeaderElement);
    expect(onClickEvent).toHaveBeenCalled();
  });
});