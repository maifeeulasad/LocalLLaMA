import React, { lazy, Suspense } from 'react';

const Page1mk9fuq = lazy(() => import('./Page'));

const LazyPage1mk9fuq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk9fuq />
  </Suspense>
);

export { LazyPage1mk9fuq };
