import React, { lazy, Suspense } from 'react';

const Page1mhx9d2 = lazy(() => import('./Page'));

const LazyPage1mhx9d2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhx9d2 />
  </Suspense>
);

export { LazyPage1mhx9d2 };
