import Dashboard from './Dashboard';
import React from 'react';
import { render, fireEvent } from "@testing-library/react";

test('should match snapshot', () => {
    expect (render(<Dashboard />)).toMatchSnapshot();
});

//gate tests

it('defaults to unlocked and open', ()=>{
    const { getByText } = render( <Dashboard /> );
    getByText(/open/i);
    getByText(/unlocked/i);
})

it('cannot be closed or opened if it is locked', () => {
    const { getByText } = render( <Dashboard /> );
    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);
    fireEvent.click(lockButton);
    expect(closeButton.disabled).toBe(true); 
  });
