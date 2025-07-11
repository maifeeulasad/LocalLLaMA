import React, { lazy, Suspense } from 'react';

const Page1lwedkk = lazy(() => import('./Page'));

const LazyPage1lwedkk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwedkk />
  </Suspense>
);

export { LazyPage1lwedkk };
