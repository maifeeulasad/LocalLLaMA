import React, { lazy, Suspense } from 'react';

const Page1lqmbh3 = lazy(() => import('./Page'));

const LazyPage1lqmbh3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqmbh3 />
  </Suspense>
);

export { LazyPage1lqmbh3 };
