import React, { lazy, Suspense } from 'react';

const Page1m3nc51 = lazy(() => import('./Page'));

const LazyPage1m3nc51 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3nc51 />
  </Suspense>
);

export { LazyPage1m3nc51 };
