'use client';

import { useFormStatus } from 'react-dom';

import classes from './ShareFormSubmitButton.module.css';

export default function ShareFormSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={classes['submit-button']} disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
