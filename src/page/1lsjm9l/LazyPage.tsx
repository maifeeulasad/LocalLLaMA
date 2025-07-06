import React, { lazy, Suspense } from 'react';

const Page1lsjm9l = lazy(() => import('./Page'));

const LazyPage1lsjm9l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsjm9l />
  </Suspense>
);

export { LazyPage1lsjm9l };
