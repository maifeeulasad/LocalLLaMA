import React, { lazy, Suspense } from 'react';

const Page1madjq6 = lazy(() => import('./Page'));

const LazyPage1madjq6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1madjq6 />
  </Suspense>
);

export { LazyPage1madjq6 };
