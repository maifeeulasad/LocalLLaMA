import React, { lazy, Suspense } from 'react';

const Page1mb3xi3 = lazy(() => import('./Page'));

const LazyPage1mb3xi3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb3xi3 />
  </Suspense>
);

export { LazyPage1mb3xi3 };
