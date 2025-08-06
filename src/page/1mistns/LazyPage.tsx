import React, { lazy, Suspense } from 'react';

const Page1mistns = lazy(() => import('./Page'));

const LazyPage1mistns = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mistns />
  </Suspense>
);

export { LazyPage1mistns };
