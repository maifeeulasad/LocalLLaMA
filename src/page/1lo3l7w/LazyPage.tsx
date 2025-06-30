import React, { lazy, Suspense } from 'react';

const Page1lo3l7w = lazy(() => import('./Page'));

const LazyPage1lo3l7w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo3l7w />
  </Suspense>
);

export { LazyPage1lo3l7w };
