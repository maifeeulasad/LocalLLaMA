import React, { lazy, Suspense } from 'react';

const Page1m10jln = lazy(() => import('./Page'));

const LazyPage1m10jln = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m10jln />
  </Suspense>
);

export { LazyPage1m10jln };
