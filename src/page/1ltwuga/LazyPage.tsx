import React, { lazy, Suspense } from 'react';

const Page1ltwuga = lazy(() => import('./Page'));

const LazyPage1ltwuga = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltwuga />
  </Suspense>
);

export { LazyPage1ltwuga };
