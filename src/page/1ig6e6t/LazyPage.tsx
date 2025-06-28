import React, { lazy, Suspense } from 'react';

const Page1ig6e6t = lazy(() => import('./Page'));

const LazyPage1ig6e6t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ig6e6t />
  </Suspense>
);

export { LazyPage1ig6e6t };
