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
});