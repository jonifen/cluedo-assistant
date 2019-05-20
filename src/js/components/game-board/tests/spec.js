import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import GameBoard from '../index';
import Entities from '../../../entities-config';

jest.mock('../../../entities-config', () => {
  return [{ "entity":"colonel-mustard", "name":"Col. Mustard", "category":"suspect" }];
});

describe('<GameBoard />', () => {
  afterEach(cleanup);
  
  it('Should render without crashing', () => {
    render(<GameBoard />);
  });
  
  it('should render 1 entity when the Entities file contains 1 item', () => {
    const { getByTestId } = render(<GameBoard />);
    expect(getByTestId('entity-image')).toBeInTheDocument();
  });
});
