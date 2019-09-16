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