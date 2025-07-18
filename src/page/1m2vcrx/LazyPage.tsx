import React, { lazy, Suspense } from 'react';

const Page1m2vcrx = lazy(() => import('./Page'));

const LazyPage1m2vcrx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2vcrx />
  </Suspense>
);

export { LazyPage1m2vcrx };
