import React, { lazy, Suspense } from 'react';

const Page1lz5sm6 = lazy(() => import('./Page'));

const LazyPage1lz5sm6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz5sm6 />
  </Suspense>
);

export { LazyPage1lz5sm6 };
