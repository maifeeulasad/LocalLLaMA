import React, { lazy, Suspense } from 'react';

const Page1mi0sr3 = lazy(() => import('./Page'));

const LazyPage1mi0sr3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi0sr3 />
  </Suspense>
);

export { LazyPage1mi0sr3 };
