import React, { lazy, Suspense } from 'react';

const Page1mer7up = lazy(() => import('./Page'));

const LazyPage1mer7up = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mer7up />
  </Suspense>
);

export { LazyPage1mer7up };
