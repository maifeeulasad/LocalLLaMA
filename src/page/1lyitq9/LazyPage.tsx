import React, { lazy, Suspense } from 'react';

const Page1lyitq9 = lazy(() => import('./Page'));

const LazyPage1lyitq9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyitq9 />
  </Suspense>
);

export { LazyPage1lyitq9 };
