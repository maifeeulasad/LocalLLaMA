import React, { lazy, Suspense } from 'react';

const Page1lpquz6 = lazy(() => import('./Page'));

const LazyPage1lpquz6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpquz6 />
  </Suspense>
);

export { LazyPage1lpquz6 };
