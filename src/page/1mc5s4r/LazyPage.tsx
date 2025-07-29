import React, { lazy, Suspense } from 'react';

const Page1mc5s4r = lazy(() => import('./Page'));

const LazyPage1mc5s4r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc5s4r />
  </Suspense>
);

export { LazyPage1mc5s4r };
