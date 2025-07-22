import React, { lazy, Suspense } from 'react';

const Page1m6172l = lazy(() => import('./Page'));

const LazyPage1m6172l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6172l />
  </Suspense>
);

export { LazyPage1m6172l };
