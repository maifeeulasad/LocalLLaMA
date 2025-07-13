import React, { lazy, Suspense } from 'react';

const Page1lyt372 = lazy(() => import('./Page'));

const LazyPage1lyt372 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyt372 />
  </Suspense>
);

export { LazyPage1lyt372 };
