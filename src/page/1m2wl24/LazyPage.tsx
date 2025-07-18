import React, { lazy, Suspense } from 'react';

const Page1m2wl24 = lazy(() => import('./Page'));

const LazyPage1m2wl24 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2wl24 />
  </Suspense>
);

export { LazyPage1m2wl24 };
