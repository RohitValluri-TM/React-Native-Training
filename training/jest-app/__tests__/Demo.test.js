// __tests__/Demo.test.js
import 'react-native';
import React from 'react';
import Demo from '../components/Demo';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Demo/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
//Observe snapshots folder and Demo.test.js.snap in it it.