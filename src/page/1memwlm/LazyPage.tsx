import React, { lazy, Suspense } from 'react';

const Page1memwlm = lazy(() => import('./Page'));

const LazyPage1memwlm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1memwlm />
  </Suspense>
);

export { LazyPage1memwlm };
