import React, { lazy, Suspense } from 'react';

const Page1lub87l = lazy(() => import('./Page'));

const LazyPage1lub87l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lub87l />
  </Suspense>
);

export { LazyPage1lub87l };
