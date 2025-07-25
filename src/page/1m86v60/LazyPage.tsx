import React, { lazy, Suspense } from 'react';

const Page1m86v60 = lazy(() => import('./Page'));

const LazyPage1m86v60 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m86v60 />
  </Suspense>
);

export { LazyPage1m86v60 };
