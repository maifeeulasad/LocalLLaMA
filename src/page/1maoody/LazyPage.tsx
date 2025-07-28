import React, { lazy, Suspense } from 'react';

const Page1maoody = lazy(() => import('./Page'));

const LazyPage1maoody = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maoody />
  </Suspense>
);

export { LazyPage1maoody };
