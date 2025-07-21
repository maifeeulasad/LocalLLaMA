import React, { lazy, Suspense } from 'react';

const Page1m568j8 = lazy(() => import('./Page'));

const LazyPage1m568j8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m568j8 />
  </Suspense>
);

export { LazyPage1m568j8 };
