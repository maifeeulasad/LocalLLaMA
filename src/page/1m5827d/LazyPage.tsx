import React, { lazy, Suspense } from 'react';

const Page1m5827d = lazy(() => import('./Page'));

const LazyPage1m5827d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5827d />
  </Suspense>
);

export { LazyPage1m5827d };
