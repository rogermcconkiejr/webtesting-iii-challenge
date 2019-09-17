import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

import React from 'react';
import { render, fireEvent, getByText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// it ('provides buttons to toggle the close and locked states', ()=>{
//     const { getByText } = render( <Controls /> );
//     const closeButton = getByText(/close gate/i);
//     fireEvent.click(closeButton);
//     getByText(/open gate/i);
// })

it("provides buttons to toggle both the closed and locked state", () => {
    const { getByText } = render( <Dashboard /> );
    getByText(/close gate/i);
    getByText(/lock gate/i);

  });

it('buttons text changes to reflect the state the door will be in if clicked', ()=>{
    const { getByText } = render( <Dashboard /> );
    const closeButton = getByText(/close gate/i);
    const lockButton = getByText(/lock gate/i);
    getByText(/close gate/i);
    fireEvent.click(closeButton);
    getByText(/open gate/i);
    getByText(/lock gate/i);
    fireEvent.click(lockButton);
    const unlockButton = getByText(/unlock gate/i);
    getByText(/unlock gate/i);
    fireEvent.click(unlockButton);
    const openButton = getByText(/open gate/i);
    getByText(/open gate/i);
    getByText(/lock gate/i);
    fireEvent.click(openButton);
    getByText(/close gate/i);

})

  it('closed button is disabled if gate is locked', () => {
    const { getByText } = render( <Dashboard /> );
    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);
    fireEvent.click(closeButton);
    fireEvent.click(lockButton);
    expect(closeButton.disabled).toBe(true); 
  });

  it ('locked button is disabled if gate is open', ()=> {
      const { getByText } = render ( <Dashboard />);
      const lockButton = getByText(/lock gate/i);
      expect(lockButton.disabled).toBe(true) 
  })