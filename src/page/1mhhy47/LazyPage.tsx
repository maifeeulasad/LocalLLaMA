import React, { lazy, Suspense } from 'react';

const Page1mhhy47 = lazy(() => import('./Page'));

const LazyPage1mhhy47 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhhy47 />
  </Suspense>
);

export { LazyPage1mhhy47 };
