import React, { lazy, Suspense } from 'react';

const Page1m145cw = lazy(() => import('./Page'));

const LazyPage1m145cw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m145cw />
  </Suspense>
);

export { LazyPage1m145cw };
