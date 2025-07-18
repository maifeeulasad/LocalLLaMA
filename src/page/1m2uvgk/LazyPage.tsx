import React, { lazy, Suspense } from 'react';

const Page1m2uvgk = lazy(() => import('./Page'));

const LazyPage1m2uvgk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2uvgk />
  </Suspense>
);

export { LazyPage1m2uvgk };
