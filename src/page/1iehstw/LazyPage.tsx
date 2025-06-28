import React, { lazy, Suspense } from 'react';

const Page1iehstw = lazy(() => import('./Page'));

const LazyPage1iehstw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iehstw />
  </Suspense>
);

export { LazyPage1iehstw };
