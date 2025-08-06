import React, { lazy, Suspense } from 'react';

const Page1miirnt = lazy(() => import('./Page'));

const LazyPage1miirnt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miirnt />
  </Suspense>
);

export { LazyPage1miirnt };
