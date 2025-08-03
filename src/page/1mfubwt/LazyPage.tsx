import React, { lazy, Suspense } from 'react';

const Page1mfubwt = lazy(() => import('./Page'));

const LazyPage1mfubwt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfubwt />
  </Suspense>
);

export { LazyPage1mfubwt };
