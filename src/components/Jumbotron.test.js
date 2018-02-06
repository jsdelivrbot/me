import React from 'react';
import renderer from 'react-test-renderer';

import Jumbotron from './Jumbotron';

describe('Jumbotron', () => {
  const makeComponent = customProps => {
    const defaultProps = {
      headline: 'Foo',
      subhead: 'Bar'
    };
    const props = { ...defaultProps, ...customProps };
    return renderer.create(
      <Jumbotron { ...props } />,
    );
  };

  test('_SNAPSHOT_', () => {
    const component = makeComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const component = makeComponent();
    expect(component).toBe.ok;
  });
});