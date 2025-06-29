import React, { lazy, Suspense } from 'react';

const Page1lnf7eo = lazy(() => import('./Page'));

const LazyPage1lnf7eo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnf7eo />
  </Suspense>
);

export { LazyPage1lnf7eo };
