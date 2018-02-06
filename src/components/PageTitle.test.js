import React from 'react';
import renderer from 'react-test-renderer';

import PageTitle from './PageTitle';

describe('PageTitle', () => {
  const makeComponent = customProps => {
    const defaultProps = {
      title: 'Foo',
      subtitle: 'Bar'
    };
    const props = { ...defaultProps, ...customProps };
    return renderer.create(
      <PageTitle { ...props } />,
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