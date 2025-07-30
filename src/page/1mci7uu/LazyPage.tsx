import React, { lazy, Suspense } from 'react';

const Page1mci7uu = lazy(() => import('./Page'));

const LazyPage1mci7uu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mci7uu />
  </Suspense>
);

export { LazyPage1mci7uu };
