import React, { lazy, Suspense } from 'react';

const Page1m8wg2r = lazy(() => import('./Page'));

const LazyPage1m8wg2r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8wg2r />
  </Suspense>
);

export { LazyPage1m8wg2r };
