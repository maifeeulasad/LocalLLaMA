import React, { lazy, Suspense } from 'react';

const Page1miaugk = lazy(() => import('./Page'));

const LazyPage1miaugk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miaugk />
  </Suspense>
);

export { LazyPage1miaugk };
