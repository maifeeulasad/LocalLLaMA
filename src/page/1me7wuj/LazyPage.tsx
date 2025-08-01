import React, { lazy, Suspense } from 'react';

const Page1me7wuj = lazy(() => import('./Page'));

const LazyPage1me7wuj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me7wuj />
  </Suspense>
);

export { LazyPage1me7wuj };
