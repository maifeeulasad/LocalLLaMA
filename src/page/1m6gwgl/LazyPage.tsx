import React, { lazy, Suspense } from 'react';

const Page1m6gwgl = lazy(() => import('./Page'));

const LazyPage1m6gwgl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6gwgl />
  </Suspense>
);

export { LazyPage1m6gwgl };
