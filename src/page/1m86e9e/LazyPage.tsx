import React, { lazy, Suspense } from 'react';

const Page1m86e9e = lazy(() => import('./Page'));

const LazyPage1m86e9e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m86e9e />
  </Suspense>
);

export { LazyPage1m86e9e };
