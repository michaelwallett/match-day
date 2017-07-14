import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('When basic button rendered', () => {
  test('should output button', () => {
    const component = renderer.create(
      <Button>Press Me</Button>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
