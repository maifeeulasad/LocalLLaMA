import React, { lazy, Suspense } from 'react';

const Page1lpy5es = lazy(() => import('./Page'));

const LazyPage1lpy5es = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpy5es />
  </Suspense>
);

export { LazyPage1lpy5es };
