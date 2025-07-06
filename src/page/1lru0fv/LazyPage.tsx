import React, { lazy, Suspense } from 'react';

const Page1lru0fv = lazy(() => import('./Page'));

const LazyPage1lru0fv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lru0fv />
  </Suspense>
);

export { LazyPage1lru0fv };
