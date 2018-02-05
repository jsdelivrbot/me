import React from 'react';
import PageTitle from './PageTitle';
import renderer from 'react-test-renderer';

test('snapshot', () => {
  const component = renderer.create(
    <PageTitle title='Foo Bar' />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
