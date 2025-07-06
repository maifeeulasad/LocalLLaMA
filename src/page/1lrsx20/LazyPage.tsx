import React, { lazy, Suspense } from 'react';

const Page1lrsx20 = lazy(() => import('./Page'));

const LazyPage1lrsx20 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrsx20 />
  </Suspense>
);

export { LazyPage1lrsx20 };
