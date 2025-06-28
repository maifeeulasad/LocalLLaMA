import React, { lazy, Suspense } from 'react';

const Page1jytw62 = lazy(() => import('./Page'));

const LazyPage1jytw62 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jytw62 />
  </Suspense>
);

export { LazyPage1jytw62 };
