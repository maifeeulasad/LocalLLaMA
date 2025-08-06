import React, { lazy, Suspense } from 'react';

const Page1minxdr = lazy(() => import('./Page'));

const LazyPage1minxdr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minxdr />
  </Suspense>
);

export { LazyPage1minxdr };
