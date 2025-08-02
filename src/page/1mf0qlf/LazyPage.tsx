import React, { lazy, Suspense } from 'react';

const Page1mf0qlf = lazy(() => import('./Page'));

const LazyPage1mf0qlf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf0qlf />
  </Suspense>
);

export { LazyPage1mf0qlf };
