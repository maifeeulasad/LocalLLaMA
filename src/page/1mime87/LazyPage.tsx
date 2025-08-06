import React, { lazy, Suspense } from 'react';

const Page1mime87 = lazy(() => import('./Page'));

const LazyPage1mime87 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mime87 />
  </Suspense>
);

export { LazyPage1mime87 };
