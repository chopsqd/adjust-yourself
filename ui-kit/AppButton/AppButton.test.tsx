import React from 'react';
import renderer from 'react-test-renderer';
import AppButtonComponent from './AppButtonComponent';

describe('AppButtonComponent', () => {
   test('renders correctly with props', () => {
      const tree = renderer.create(
         <AppButtonComponent
            title="Press Me"
      onPress={() => console.log('Button pressed')}
      bgColor="#0295FF"
         />
   ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   test('renders with default props if not provided', () => {
      const tree = renderer.create(<AppButtonComponent />).toJSON();
      expect(tree).toMatchSnapshot();
   });

   test('calls onPress handler when button is pressed', () => {
      const mockOnPress = jest.fn();
      const component = renderer.create(
         <AppButtonComponent
            title="Press Me"
      onPress={mockOnPress}
      bgColor="#0295FF"
         />
   );

      const button = component.root.findByType('Pressable');
      button.props.onPress();

      expect(mockOnPress).toHaveBeenCalled();
   });
});
