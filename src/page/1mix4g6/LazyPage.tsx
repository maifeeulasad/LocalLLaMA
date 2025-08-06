import React, { lazy, Suspense } from 'react';

const Page1mix4g6 = lazy(() => import('./Page'));

const LazyPage1mix4g6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mix4g6 />
  </Suspense>
);

export { LazyPage1mix4g6 };
