import React, { lazy, Suspense } from 'react';

const Page1lsiffa = lazy(() => import('./Page'));

const LazyPage1lsiffa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsiffa />
  </Suspense>
);

export { LazyPage1lsiffa };
