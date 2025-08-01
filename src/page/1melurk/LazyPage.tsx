import React, { lazy, Suspense } from 'react';

const Page1melurk = lazy(() => import('./Page'));

const LazyPage1melurk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1melurk />
  </Suspense>
);

export { LazyPage1melurk };
