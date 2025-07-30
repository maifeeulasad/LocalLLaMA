import React, { lazy, Suspense } from 'react';

const Page1mczdbb = lazy(() => import('./Page'));

const LazyPage1mczdbb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mczdbb />
  </Suspense>
);

export { LazyPage1mczdbb };
