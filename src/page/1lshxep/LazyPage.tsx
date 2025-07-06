import React, { lazy, Suspense } from 'react';

const Page1lshxep = lazy(() => import('./Page'));

const LazyPage1lshxep = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lshxep />
  </Suspense>
);

export { LazyPage1lshxep };
