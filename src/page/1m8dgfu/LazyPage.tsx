import React, { lazy, Suspense } from 'react';

const Page1m8dgfu = lazy(() => import('./Page'));

const LazyPage1m8dgfu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8dgfu />
  </Suspense>
);

export { LazyPage1m8dgfu };
