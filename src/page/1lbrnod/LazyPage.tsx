import React, { lazy, Suspense } from 'react';

const Page1lbrnod = lazy(() => import('./Page'));

const LazyPage1lbrnod = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lbrnod />
  </Suspense>
);

export { LazyPage1lbrnod };
