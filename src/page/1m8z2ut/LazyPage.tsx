import React, { lazy, Suspense } from 'react';

const Page1m8z2ut = lazy(() => import('./Page'));

const LazyPage1m8z2ut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8z2ut />
  </Suspense>
);

export { LazyPage1m8z2ut };
