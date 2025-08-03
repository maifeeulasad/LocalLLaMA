import React, { lazy, Suspense } from 'react';

const Page1mgdur5 = lazy(() => import('./Page'));

const LazyPage1mgdur5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgdur5 />
  </Suspense>
);

export { LazyPage1mgdur5 };
