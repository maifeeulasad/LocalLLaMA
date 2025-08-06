import React, { lazy, Suspense } from 'react';

const Page1mignfe = lazy(() => import('./Page'));

const LazyPage1mignfe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mignfe />
  </Suspense>
);

export { LazyPage1mignfe };
