import React, { lazy, Suspense } from 'react';

const Page1mez1w0 = lazy(() => import('./Page'));

const LazyPage1mez1w0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mez1w0 />
  </Suspense>
);

export { LazyPage1mez1w0 };
