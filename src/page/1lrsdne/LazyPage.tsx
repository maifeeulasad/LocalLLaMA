import React, { lazy, Suspense } from 'react';

const Page1lrsdne = lazy(() => import('./Page'));

const LazyPage1lrsdne = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrsdne />
  </Suspense>
);

export { LazyPage1lrsdne };
