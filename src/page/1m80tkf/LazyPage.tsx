import React, { lazy, Suspense } from 'react';

const Page1m80tkf = lazy(() => import('./Page'));

const LazyPage1m80tkf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m80tkf />
  </Suspense>
);

export { LazyPage1m80tkf };
