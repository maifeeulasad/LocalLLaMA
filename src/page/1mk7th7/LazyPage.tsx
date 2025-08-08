import React, { lazy, Suspense } from 'react';

const Page1mk7th7 = lazy(() => import('./Page'));

const LazyPage1mk7th7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk7th7 />
  </Suspense>
);

export { LazyPage1mk7th7 };
