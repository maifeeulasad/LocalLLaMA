import React, { lazy, Suspense } from 'react';

const Page1mf7663 = lazy(() => import('./Page'));

const LazyPage1mf7663 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf7663 />
  </Suspense>
);

export { LazyPage1mf7663 };
