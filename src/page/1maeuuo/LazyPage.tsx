import React, { lazy, Suspense } from 'react';

const Page1maeuuo = lazy(() => import('./Page'));

const LazyPage1maeuuo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maeuuo />
  </Suspense>
);

export { LazyPage1maeuuo };
