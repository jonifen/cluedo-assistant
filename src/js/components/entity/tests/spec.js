import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Entity from '../index';
import 'jest-dom/extend-expect';

describe('<Entity />', () => {
  afterEach(cleanup);
  
  const entityDetails = {
    entity: 'colonel-mustard',
    name: 'Col. Mustard',
    category: 'suspect'
  };

  it('should render without crashing', () => {
    render(<Entity />);
  });

  it('should be included in the document when rendered', () => {
    const { getByTestId } = render(<Entity />);
    expect(getByTestId('entity')).toBeInTheDocument();
  });

  it('should render an image if provided with valid props', () => {
    const { getByTestId, container } = render(<Entity {...entityDetails} />);
    const imageElement = getByTestId('entity-image');
    expect(container).toContainElement(imageElement);
  });

  it('should update the entity to be selected if clicked', () => {
    const onEntityClick = (e) => {};
    const { getByTestId } = render(<Entity {...entityDetails} currentSelectedState={false} onClickEvent={onEntityClick} />);
    const entityElement = getByTestId('entity');
    fireEvent.click(entityElement);
    expect(entityElement).toHaveClass('entity', 'selected');
  });
});