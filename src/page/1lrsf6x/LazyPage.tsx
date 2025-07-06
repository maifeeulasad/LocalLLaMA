import React, { lazy, Suspense } from 'react';

const Page1lrsf6x = lazy(() => import('./Page'));

const LazyPage1lrsf6x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrsf6x />
  </Suspense>
);

export { LazyPage1lrsf6x };
