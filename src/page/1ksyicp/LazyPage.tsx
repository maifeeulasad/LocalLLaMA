import React, { lazy, Suspense } from 'react';

const Page1ksyicp = lazy(() => import('./Page'));

const LazyPage1ksyicp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ksyicp />
  </Suspense>
);

export { LazyPage1ksyicp };
