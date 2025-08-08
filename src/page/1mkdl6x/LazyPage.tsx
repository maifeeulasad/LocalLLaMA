import React, { lazy, Suspense } from 'react';

const Page1mkdl6x = lazy(() => import('./Page'));

const LazyPage1mkdl6x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkdl6x />
  </Suspense>
);

export { LazyPage1mkdl6x };
