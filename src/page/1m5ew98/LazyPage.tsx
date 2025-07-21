import React, { lazy, Suspense } from 'react';

const Page1m5ew98 = lazy(() => import('./Page'));

const LazyPage1m5ew98 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5ew98 />
  </Suspense>
);

export { LazyPage1m5ew98 };
