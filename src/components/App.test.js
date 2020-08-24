import React from 'react';

//importing a helper function from shallow
import { shallow } from 'enzyme';
//importing a component that doesn't exist yet. Development will satisfy test requirements
import App from './App';

const app = shallow(<App />);

//global it function
it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
