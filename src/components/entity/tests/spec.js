import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Entity from '../index';
import 'jest-dom/extend-expect';

describe('<Entity />', () => {
  afterEach(cleanup);
  
  it('should render without crashing', () => {
    render(<Entity />);
  });

  it('should be included in the document when rendered', () => {
    const { getByTestId } = render(<Entity />);
    expect(getByTestId('entity')).toBeInTheDocument();
  });

  it('should render an image if provided with valid props', () => {
    const entityDetails = {
      entity: 'colonel-mustard',
      name: 'Col. Mustard',
      category: 'suspect'
    };
    const { getByTestId, container } = render(<Entity {...entityDetails} />);
    const imageElement = getByTestId('entity-image');
    expect(container).toContainElement(imageElement);
  });
});