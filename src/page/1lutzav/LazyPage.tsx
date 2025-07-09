import React, { lazy, Suspense } from 'react';

const Page1lutzav = lazy(() => import('./Page'));

const LazyPage1lutzav = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lutzav />
  </Suspense>
);

export { LazyPage1lutzav };
