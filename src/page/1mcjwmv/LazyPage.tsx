import React, { lazy, Suspense } from 'react';

const Page1mcjwmv = lazy(() => import('./Page'));

const LazyPage1mcjwmv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcjwmv />
  </Suspense>
);

export { LazyPage1mcjwmv };
