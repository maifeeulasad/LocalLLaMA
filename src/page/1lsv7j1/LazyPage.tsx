import React, { lazy, Suspense } from 'react';

const Page1lsv7j1 = lazy(() => import('./Page'));

const LazyPage1lsv7j1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsv7j1 />
  </Suspense>
);

export { LazyPage1lsv7j1 };
