import Display from './Display';
import Dashboard from '../dashboard/Dashboard';
import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

it('displays if gate is open/closed and if it locked/unlocked', () => {
    const { getByText } = render( <Dashboard /> );
    const lockButton = getByText (/lock gate/i)
    const closeButton = getByText (/close gate/i)
    getByText(/open/i);
    getByText(/unlocked/i);
    fireEvent.click(closeButton);
    getByText(/closed/i)
    fireEvent.click(lockButton);
    getByText(/locked/i);
  }); 

  it('displays if gate is closed', ()=>{
  const { getByText } = render ( <Display closed={true} /> )
    getByText(/closed/i);
  });

  it('displays if gate is open', ()=>{
    const { getByText } = render ( <Display closed={false} /> )
      getByText(/open/i);
    });

  it ('displays if gate is locked', ()=>{
      const { getByText } = render( <Display locked={true} />)
    getByText(/locked/i);
  });

  it ('displays if gate is unlocked', ()=>{
    const { getByText } = render( <Display locked={false} />)
  getByText(/unlocked/i);
});

it('should use green-led class when unlocked',()=>{
    const { getByText } = render(<Display locked={false} />);

    const unlockedDisplay = getByText(/unlocked/i);

    expect(unlockedDisplay).toHaveClass("green-led");

  });

it ('should use red-led class when locked',()=>{
    const { getByText } = render( <Display locked={true} />);
    const lockedDisplay = getByText(/locked/i);
    expect(lockedDisplay).toHaveClass("red-led");
})