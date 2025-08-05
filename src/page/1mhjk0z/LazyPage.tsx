import React, { lazy, Suspense } from 'react';

const Page1mhjk0z = lazy(() => import('./Page'));

const LazyPage1mhjk0z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhjk0z />
  </Suspense>
);

export { LazyPage1mhjk0z };
