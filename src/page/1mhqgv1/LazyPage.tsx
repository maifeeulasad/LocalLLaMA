import React, { lazy, Suspense } from 'react';

const Page1mhqgv1 = lazy(() => import('./Page'));

const LazyPage1mhqgv1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhqgv1 />
  </Suspense>
);

export { LazyPage1mhqgv1 };
