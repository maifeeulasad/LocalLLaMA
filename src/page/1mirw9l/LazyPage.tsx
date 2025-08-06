import React, { lazy, Suspense } from 'react';

const Page1mirw9l = lazy(() => import('./Page'));

const LazyPage1mirw9l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mirw9l />
  </Suspense>
);

export { LazyPage1mirw9l };
