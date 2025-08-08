import React, { lazy, Suspense } from 'react';

const Page1mkd3t1 = lazy(() => import('./Page'));

const LazyPage1mkd3t1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkd3t1 />
  </Suspense>
);

export { LazyPage1mkd3t1 };
