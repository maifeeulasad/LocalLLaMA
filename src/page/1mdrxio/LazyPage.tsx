import React, { lazy, Suspense } from 'react';

const Page1mdrxio = lazy(() => import('./Page'));

const LazyPage1mdrxio = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdrxio />
  </Suspense>
);

export { LazyPage1mdrxio };
