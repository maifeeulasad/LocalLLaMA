import React, { lazy, Suspense } from 'react';

const Page1lp9gh2 = lazy(() => import('./Page'));

const LazyPage1lp9gh2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp9gh2 />
  </Suspense>
);

export { LazyPage1lp9gh2 };
