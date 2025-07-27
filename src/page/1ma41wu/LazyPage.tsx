import React, { lazy, Suspense } from 'react';

const Page1ma41wu = lazy(() => import('./Page'));

const LazyPage1ma41wu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma41wu />
  </Suspense>
);

export { LazyPage1ma41wu };
