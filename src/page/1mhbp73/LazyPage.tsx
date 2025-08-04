import React, { lazy, Suspense } from 'react';

const Page1mhbp73 = lazy(() => import('./Page'));

const LazyPage1mhbp73 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhbp73 />
  </Suspense>
);

export { LazyPage1mhbp73 };
