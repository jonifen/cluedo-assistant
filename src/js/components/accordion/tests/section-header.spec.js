import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import SectionHeader from '../section-header';
import 'jest-dom/extend-expect';

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
      <SectionHeader>
        <h2 data-testid="accordion-section-header-h2">hello</h2>
      </SectionHeader>
    );
    const headingElement = getByTestId('accordion-section-header-h2');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('hello');
  });

  it('should run the onClickEvent function when clicked', () => {
    const onClickEvent = jest.fn();
    const { getByTestId } = render(
      <SectionHeader onClickEvent={onClickEvent}>
        <p>random text</p>
      </SectionHeader>
    );
    const sectionHeaderElement = getByTestId('accordion-section-header');
    fireEvent.click(sectionHeaderElement);
    expect(onClickEvent).toHaveBeenCalled();
  });
});