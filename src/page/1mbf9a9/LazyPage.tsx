import React, { lazy, Suspense } from 'react';

const Page1mbf9a9 = lazy(() => import('./Page'));

const LazyPage1mbf9a9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbf9a9 />
  </Suspense>
);

export { LazyPage1mbf9a9 };
