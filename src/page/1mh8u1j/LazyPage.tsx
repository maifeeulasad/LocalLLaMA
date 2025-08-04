import React, { lazy, Suspense } from 'react';

const Page1mh8u1j = lazy(() => import('./Page'));

const LazyPage1mh8u1j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh8u1j />
  </Suspense>
);

export { LazyPage1mh8u1j };
