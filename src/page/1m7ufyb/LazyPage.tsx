import React, { lazy, Suspense } from 'react';

const Page1m7ufyb = lazy(() => import('./Page'));

const LazyPage1m7ufyb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ufyb />
  </Suspense>
);

export { LazyPage1m7ufyb };
