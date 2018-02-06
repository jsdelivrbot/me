import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Jumbotron from './Jumbotron';

test('snapshot', () => {
  const component = renderer.create(
    <Jumbotron headline="Foo" subhead="Bar" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Jumbotron', () => {
  it('should render without crashing', () => {
    const component = renderer.create(
      <Jumbotron headline="Foo" subhead="Bar" />,
    );
    expect(component).toBe.ok;
  });
});