import React, { lazy, Suspense } from 'react';

const Page1mhxhi5 = lazy(() => import('./Page'));

const LazyPage1mhxhi5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhxhi5 />
  </Suspense>
);

export { LazyPage1mhxhi5 };
