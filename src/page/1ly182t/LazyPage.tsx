import React, { lazy, Suspense } from 'react';

const Page1ly182t = lazy(() => import('./Page'));

const LazyPage1ly182t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly182t />
  </Suspense>
);

export { LazyPage1ly182t };
