import React, { lazy, Suspense } from 'react';

const Page1m32z28 = lazy(() => import('./Page'));

const LazyPage1m32z28 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m32z28 />
  </Suspense>
);

export { LazyPage1m32z28 };
