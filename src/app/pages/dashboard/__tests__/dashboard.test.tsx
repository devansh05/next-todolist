import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom";
import Dashboard from '../dashboard';

describe('Dashboard', () => {
  it('renders dashboard', () => {
    // render(<Dashboard />)
    // const heading = screen.getByRole('heading', { level: 1 })
    // const heading = screen.getByTestId('heading')
    // const heading = screen.getByText('Home')
    // expect(heading).toBeInTheDocument()
    
    //Snapshot testing
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})