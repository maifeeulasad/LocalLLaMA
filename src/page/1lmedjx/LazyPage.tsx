import React, { lazy, Suspense } from 'react';

const Page1lmedjx = lazy(() => import('./Page'));

const LazyPage1lmedjx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmedjx />
  </Suspense>
);

export { LazyPage1lmedjx };
