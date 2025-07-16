import React, { lazy, Suspense } from 'react';

const Page1m0wji2 = lazy(() => import('./Page'));

const LazyPage1m0wji2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0wji2 />
  </Suspense>
);

export { LazyPage1m0wji2 };
