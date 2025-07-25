import React, { lazy, Suspense } from 'react';

const Page1m8vu80 = lazy(() => import('./Page'));

const LazyPage1m8vu80 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8vu80 />
  </Suspense>
);

export { LazyPage1m8vu80 };
