import React, { lazy, Suspense } from 'react';

const Page1mfrec0 = lazy(() => import('./Page'));

const LazyPage1mfrec0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfrec0 />
  </Suspense>
);

export { LazyPage1mfrec0 };
