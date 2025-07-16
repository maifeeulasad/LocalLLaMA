import React, { lazy, Suspense } from 'react';

const Page1m0yqq2 = lazy(() => import('./Page'));

const LazyPage1m0yqq2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0yqq2 />
  </Suspense>
);

export { LazyPage1m0yqq2 };
