import React, { lazy, Suspense } from 'react';

const Page1m5lf6l = lazy(() => import('./Page'));

const LazyPage1m5lf6l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5lf6l />
  </Suspense>
);

export { LazyPage1m5lf6l };
