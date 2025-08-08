import React, { lazy, Suspense } from 'react';

const Page1mk3rj1 = lazy(() => import('./Page'));

const LazyPage1mk3rj1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk3rj1 />
  </Suspense>
);

export { LazyPage1mk3rj1 };
