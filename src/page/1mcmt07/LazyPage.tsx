import React, { lazy, Suspense } from 'react';

const Page1mcmt07 = lazy(() => import('./Page'));

const LazyPage1mcmt07 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcmt07 />
  </Suspense>
);

export { LazyPage1mcmt07 };
