import React, { lazy, Suspense } from 'react';

const Page1m5mjoc = lazy(() => import('./Page'));

const LazyPage1m5mjoc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5mjoc />
  </Suspense>
);

export { LazyPage1m5mjoc };
