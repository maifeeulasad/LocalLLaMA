import React, { lazy, Suspense } from 'react';

const Page1lvoagh = lazy(() => import('./Page'));

const LazyPage1lvoagh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvoagh />
  </Suspense>
);

export { LazyPage1lvoagh };
