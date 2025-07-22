import React, { lazy, Suspense } from 'react';

const Page1m5w8yl = lazy(() => import('./Page'));

const LazyPage1m5w8yl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5w8yl />
  </Suspense>
);

export { LazyPage1m5w8yl };
