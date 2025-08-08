import React, { lazy, Suspense } from 'react';

const Page1mkerwz = lazy(() => import('./Page'));

const LazyPage1mkerwz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkerwz />
  </Suspense>
);

export { LazyPage1mkerwz };
