import React, { lazy, Suspense } from 'react';

const Page1mf3tm9 = lazy(() => import('./Page'));

const LazyPage1mf3tm9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf3tm9 />
  </Suspense>
);

export { LazyPage1mf3tm9 };
