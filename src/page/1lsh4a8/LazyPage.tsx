import React, { lazy, Suspense } from 'react';

const Page1lsh4a8 = lazy(() => import('./Page'));

const LazyPage1lsh4a8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsh4a8 />
  </Suspense>
);

export { LazyPage1lsh4a8 };
