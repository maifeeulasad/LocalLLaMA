import React, { lazy, Suspense } from 'react';

const Page1lllry7 = lazy(() => import('./Page'));

const LazyPage1lllry7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lllry7 />
  </Suspense>
);

export { LazyPage1lllry7 };
