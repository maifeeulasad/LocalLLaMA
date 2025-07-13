import React, { lazy, Suspense } from 'react';

const Page1ly35wd = lazy(() => import('./Page'));

const LazyPage1ly35wd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly35wd />
  </Suspense>
);

export { LazyPage1ly35wd };
