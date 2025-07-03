import React, { lazy, Suspense } from 'react';

const Page1lpt5jv = lazy(() => import('./Page'));

const LazyPage1lpt5jv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpt5jv />
  </Suspense>
);

export { LazyPage1lpt5jv };
