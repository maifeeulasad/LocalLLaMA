import React, { lazy, Suspense } from 'react';

const Page1mfedua = lazy(() => import('./Page'));

const LazyPage1mfedua = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfedua />
  </Suspense>
);

export { LazyPage1mfedua };
