import React, { lazy, Suspense } from 'react';

const Page1lzkrwg = lazy(() => import('./Page'));

const LazyPage1lzkrwg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzkrwg />
  </Suspense>
);

export { LazyPage1lzkrwg };
