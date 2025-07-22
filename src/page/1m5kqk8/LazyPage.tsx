import React, { lazy, Suspense } from 'react';

const Page1m5kqk8 = lazy(() => import('./Page'));

const LazyPage1m5kqk8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5kqk8 />
  </Suspense>
);

export { LazyPage1m5kqk8 };
