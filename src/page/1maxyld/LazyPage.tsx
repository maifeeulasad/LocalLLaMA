import React, { lazy, Suspense } from 'react';

const Page1maxyld = lazy(() => import('./Page'));

const LazyPage1maxyld = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maxyld />
  </Suspense>
);

export { LazyPage1maxyld };
