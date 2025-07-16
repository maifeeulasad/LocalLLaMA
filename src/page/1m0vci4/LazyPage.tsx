import React, { lazy, Suspense } from 'react';

const Page1m0vci4 = lazy(() => import('./Page'));

const LazyPage1m0vci4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0vci4 />
  </Suspense>
);

export { LazyPage1m0vci4 };
