import React, { lazy, Suspense } from 'react';

const Page1lp2h0e = lazy(() => import('./Page'));

const LazyPage1lp2h0e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp2h0e />
  </Suspense>
);

export { LazyPage1lp2h0e };
