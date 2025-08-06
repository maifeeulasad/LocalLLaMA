import React, { lazy, Suspense } from 'react';

const Page1mizx4n = lazy(() => import('./Page'));

const LazyPage1mizx4n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizx4n />
  </Suspense>
);

export { LazyPage1mizx4n };
