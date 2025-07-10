import React, { lazy, Suspense } from 'react';

const Page1lvr2ea = lazy(() => import('./Page'));

const LazyPage1lvr2ea = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvr2ea />
  </Suspense>
);

export { LazyPage1lvr2ea };
