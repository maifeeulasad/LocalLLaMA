import React, { lazy, Suspense } from 'react';

const Page1mfk60l = lazy(() => import('./Page'));

const LazyPage1mfk60l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfk60l />
  </Suspense>
);

export { LazyPage1mfk60l };
