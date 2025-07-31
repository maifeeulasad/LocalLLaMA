import React, { lazy, Suspense } from 'react';

const Page1mdqj9g = lazy(() => import('./Page'));

const LazyPage1mdqj9g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdqj9g />
  </Suspense>
);

export { LazyPage1mdqj9g };
