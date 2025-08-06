import React, { lazy, Suspense } from 'react';

const Page1mimwe9 = lazy(() => import('./Page'));

const LazyPage1mimwe9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mimwe9 />
  </Suspense>
);

export { LazyPage1mimwe9 };
