import React, { lazy, Suspense } from 'react';

const Page1mgh2cb = lazy(() => import('./Page'));

const LazyPage1mgh2cb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgh2cb />
  </Suspense>
);

export { LazyPage1mgh2cb };
