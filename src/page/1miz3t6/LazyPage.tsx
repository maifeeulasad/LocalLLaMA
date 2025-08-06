import React, { lazy, Suspense } from 'react';

const Page1miz3t6 = lazy(() => import('./Page'));

const LazyPage1miz3t6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miz3t6 />
  </Suspense>
);

export { LazyPage1miz3t6 };
