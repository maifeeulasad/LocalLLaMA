import React, { lazy, Suspense } from 'react';

const Page1mfwckf = lazy(() => import('./Page'));

const LazyPage1mfwckf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfwckf />
  </Suspense>
);

export { LazyPage1mfwckf };
