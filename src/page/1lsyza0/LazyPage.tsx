import React, { lazy, Suspense } from 'react';

const Page1lsyza0 = lazy(() => import('./Page'));

const LazyPage1lsyza0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsyza0 />
  </Suspense>
);

export { LazyPage1lsyza0 };
