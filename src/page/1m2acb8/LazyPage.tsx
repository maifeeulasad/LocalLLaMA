import React, { lazy, Suspense } from 'react';

const Page1m2acb8 = lazy(() => import('./Page'));

const LazyPage1m2acb8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2acb8 />
  </Suspense>
);

export { LazyPage1m2acb8 };
