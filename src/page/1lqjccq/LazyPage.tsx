import React, { lazy, Suspense } from 'react';

const Page1lqjccq = lazy(() => import('./Page'));

const LazyPage1lqjccq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqjccq />
  </Suspense>
);

export { LazyPage1lqjccq };
