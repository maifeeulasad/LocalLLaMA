import React, { lazy, Suspense } from 'react';

const Page1ma4oqz = lazy(() => import('./Page'));

const LazyPage1ma4oqz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma4oqz />
  </Suspense>
);

export { LazyPage1ma4oqz };
