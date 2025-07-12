import React, { lazy, Suspense } from 'react';

const Page1lxx4sb = lazy(() => import('./Page'));

const LazyPage1lxx4sb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxx4sb />
  </Suspense>
);

export { LazyPage1lxx4sb };
