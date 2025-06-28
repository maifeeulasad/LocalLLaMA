import React, { lazy, Suspense } from 'react';

const Page1lmictu = lazy(() => import('./Page'));

const LazyPage1lmictu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmictu />
  </Suspense>
);

export { LazyPage1lmictu };
