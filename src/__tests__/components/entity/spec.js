import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Entity from '../../../js/components/entity/index';
import '@testing-library/jest-dom/extend-expect';

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

  it('should update the entity to be suspected if clicked twice', () => {
    const onEntityClick = (e) => {};
    const { getByTestId } = render(<Entity {...entityDetails} currentSelectedState={false} onClickEvent={onEntityClick} />);
    const entityElement = getByTestId('entity');
    fireEvent.click(entityElement);
    fireEvent.click(entityElement);
    expect(entityElement).toHaveClass('entity');
    expect(entityElement).not.toHaveClass('selected');
    expect(entityElement).toHaveClass('suspected');
  });

  it('should update the entity to be not selected if clicked thrice', () => {
    const onEntityClick = (e) => {};
    const { getByTestId } = render(<Entity {...entityDetails} currentSelectedState={false} onClickEvent={onEntityClick} />);
    const entityElement = getByTestId('entity');
    fireEvent.click(entityElement);
    fireEvent.click(entityElement);
    fireEvent.click(entityElement);
    expect(entityElement).toHaveClass('entity');
    expect(entityElement).not.toHaveClass('selected');
    expect(entityElement).not.toHaveClass('suspected');
  });
});