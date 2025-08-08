import React, { lazy, Suspense } from 'react';

const Page1mk3w36 = lazy(() => import('./Page'));

const LazyPage1mk3w36 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk3w36 />
  </Suspense>
);

export { LazyPage1mk3w36 };
