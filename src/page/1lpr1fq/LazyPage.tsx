import React, { lazy, Suspense } from 'react';

const Page1lpr1fq = lazy(() => import('./Page'));

const LazyPage1lpr1fq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpr1fq />
  </Suspense>
);

export { LazyPage1lpr1fq };
