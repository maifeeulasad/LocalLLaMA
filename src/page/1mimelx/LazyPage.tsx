import React, { lazy, Suspense } from 'react';

const Page1mimelx = lazy(() => import('./Page'));

const LazyPage1mimelx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mimelx />
  </Suspense>
);

export { LazyPage1mimelx };
