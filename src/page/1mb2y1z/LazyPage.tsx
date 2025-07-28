import React, { lazy, Suspense } from 'react';

const Page1mb2y1z = lazy(() => import('./Page'));

const LazyPage1mb2y1z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb2y1z />
  </Suspense>
);

export { LazyPage1mb2y1z };
