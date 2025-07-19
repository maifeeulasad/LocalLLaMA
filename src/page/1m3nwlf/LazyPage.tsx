import React, { lazy, Suspense } from 'react';

const Page1m3nwlf = lazy(() => import('./Page'));

const LazyPage1m3nwlf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3nwlf />
  </Suspense>
);

export { LazyPage1m3nwlf };
