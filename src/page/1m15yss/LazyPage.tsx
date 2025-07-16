import React, { lazy, Suspense } from 'react';

const Page1m15yss = lazy(() => import('./Page'));

const LazyPage1m15yss = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m15yss />
  </Suspense>
);

export { LazyPage1m15yss };
