import React, { lazy, Suspense } from 'react';

const Page1me31d8 = lazy(() => import('./Page'));

const LazyPage1me31d8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me31d8 />
  </Suspense>
);

export { LazyPage1me31d8 };
