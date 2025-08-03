import React, { lazy, Suspense } from 'react';

const Page1mfqr3o = lazy(() => import('./Page'));

const LazyPage1mfqr3o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfqr3o />
  </Suspense>
);

export { LazyPage1mfqr3o };
