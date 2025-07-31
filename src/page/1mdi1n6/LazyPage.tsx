import React, { lazy, Suspense } from 'react';

const Page1mdi1n6 = lazy(() => import('./Page'));

const LazyPage1mdi1n6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdi1n6 />
  </Suspense>
);

export { LazyPage1mdi1n6 };
