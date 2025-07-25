import React, { lazy, Suspense } from 'react';

const Page1m8b72y = lazy(() => import('./Page'));

const LazyPage1m8b72y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8b72y />
  </Suspense>
);

export { LazyPage1m8b72y };
