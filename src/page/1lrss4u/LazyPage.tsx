import React, { lazy, Suspense } from 'react';

const Page1lrss4u = lazy(() => import('./Page'));

const LazyPage1lrss4u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrss4u />
  </Suspense>
);

export { LazyPage1lrss4u };
