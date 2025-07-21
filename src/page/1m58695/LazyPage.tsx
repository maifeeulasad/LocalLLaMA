import React, { lazy, Suspense } from 'react';

const Page1m58695 = lazy(() => import('./Page'));

const LazyPage1m58695 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m58695 />
  </Suspense>
);

export { LazyPage1m58695 };
