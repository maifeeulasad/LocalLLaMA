import React, { lazy, Suspense } from 'react';

const Page1lufhso = lazy(() => import('./Page'));

const LazyPage1lufhso = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lufhso />
  </Suspense>
);

export { LazyPage1lufhso };
