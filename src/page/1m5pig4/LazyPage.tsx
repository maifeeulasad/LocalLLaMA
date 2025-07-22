import React, { lazy, Suspense } from 'react';

const Page1m5pig4 = lazy(() => import('./Page'));

const LazyPage1m5pig4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5pig4 />
  </Suspense>
);

export { LazyPage1m5pig4 };
