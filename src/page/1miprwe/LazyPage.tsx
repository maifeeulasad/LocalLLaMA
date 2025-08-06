import React, { lazy, Suspense } from 'react';

const Page1miprwe = lazy(() => import('./Page'));

const LazyPage1miprwe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miprwe />
  </Suspense>
);

export { LazyPage1miprwe };
