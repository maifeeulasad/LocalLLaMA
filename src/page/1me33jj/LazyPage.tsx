import React, { lazy, Suspense } from 'react';

const Page1me33jj = lazy(() => import('./Page'));

const LazyPage1me33jj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me33jj />
  </Suspense>
);

export { LazyPage1me33jj };
