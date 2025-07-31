import React, { lazy, Suspense } from 'react';

const Page1md8t1g = lazy(() => import('./Page'));

const LazyPage1md8t1g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md8t1g />
  </Suspense>
);

export { LazyPage1md8t1g };
