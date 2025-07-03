import React, { lazy, Suspense } from 'react';

const Page1lq02np = lazy(() => import('./Page'));

const LazyPage1lq02np = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq02np />
  </Suspense>
);

export { LazyPage1lq02np };
