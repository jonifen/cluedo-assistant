import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GameBoard from '../index';
import getAllEntities from '../../../repositories/entities-repository';

jest.mock('../../../repositories/entities-repository');

describe('<GameBoard />', () => {
  afterEach(cleanup);

  it('Should render without crashing', () => {
    getAllEntities.mockImplementation(() => {
      return [{ "entity":"colonel-mustard", "name":"Col. Mustard", "category":"suspect" }];
    });
    render(<GameBoard />);
  });

  it('Should include a comments textarea once rendered', () => {
    getAllEntities.mockImplementation(() => {
      return [{ "entity":"colonel-mustard", "name":"Col. Mustard", "category":"suspect" }];
    });
    const { getByTestId } = render(<GameBoard />);
    expect(getByTestId('comments')).toBeInTheDocument();
  });

  it('should render 1 entity when the Entities file contains 1 item', () => {
    getAllEntities.mockImplementation(() => {
      return [{ "entity":"colonel-mustard", "name":"Col. Mustard", "category":"suspect" }];
    })
    const { getByTestId } = render(<GameBoard />);
    expect(getByTestId('entity-image')).toBeInTheDocument();
  });
});
