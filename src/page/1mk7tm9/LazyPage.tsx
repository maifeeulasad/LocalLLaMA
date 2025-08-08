import React, { lazy, Suspense } from 'react';

const Page1mk7tm9 = lazy(() => import('./Page'));

const LazyPage1mk7tm9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk7tm9 />
  </Suspense>
);

export { LazyPage1mk7tm9 };
