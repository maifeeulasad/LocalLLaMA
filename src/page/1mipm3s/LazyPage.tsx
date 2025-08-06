import React, { lazy, Suspense } from 'react';

const Page1mipm3s = lazy(() => import('./Page'));

const LazyPage1mipm3s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mipm3s />
  </Suspense>
);

export { LazyPage1mipm3s };
