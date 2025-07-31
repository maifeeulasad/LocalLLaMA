import React, { lazy, Suspense } from 'react';

const Page1md6xba = lazy(() => import('./Page'));

const LazyPage1md6xba = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md6xba />
  </Suspense>
);

export { LazyPage1md6xba };
