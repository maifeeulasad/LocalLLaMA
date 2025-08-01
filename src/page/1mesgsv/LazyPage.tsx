import React, { lazy, Suspense } from 'react';

const Page1mesgsv = lazy(() => import('./Page'));

const LazyPage1mesgsv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mesgsv />
  </Suspense>
);

export { LazyPage1mesgsv };
