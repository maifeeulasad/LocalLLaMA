import React, { lazy, Suspense } from 'react';

const Page1mime15 = lazy(() => import('./Page'));

const LazyPage1mime15 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mime15 />
  </Suspense>
);

export { LazyPage1mime15 };
