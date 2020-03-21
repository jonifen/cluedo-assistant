import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Section from '../../../js/components/accordion/section';
import '@testing-library/jest-dom/extend-expect';

describe('<Section />', () => {
  beforeEach(cleanup);

  it('should render without crashing', () => {
    render(<Section />);
  });

  it('should be included in the document after rendering', () => {
    const { getByTestId } = render(<Section />);
    expect(getByTestId('accordion-section')).toBeInTheDocument();
  });

  it('should include the text "hello" in the component after render', () => {
    const { getByTestId } = render(
      <Section>
        <p data-testid="accordion-section-p">hello</p>
      </Section>
    );
    const paragraphElement = getByTestId('accordion-section-p');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent('hello');
  });

  it('should render 2 children in the component after render', () => {
    const { getAllByTestId } = render(
      <Section>
        <p data-testid="section-child">child 1</p>
        <p data-testid="section-child">child 2</p>
      </Section>
    );
    const childElements = getAllByTestId('section-child');
    expect(childElements.length).toBe(2);
  })
});