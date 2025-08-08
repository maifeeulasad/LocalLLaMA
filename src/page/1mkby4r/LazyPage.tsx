import React, { lazy, Suspense } from 'react';

const Page1mkby4r = lazy(() => import('./Page'));

const LazyPage1mkby4r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkby4r />
  </Suspense>
);

export { LazyPage1mkby4r };
