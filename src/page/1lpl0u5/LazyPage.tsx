import React, { lazy, Suspense } from 'react';

const Page1lpl0u5 = lazy(() => import('./Page'));

const LazyPage1lpl0u5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpl0u5 />
  </Suspense>
);

export { LazyPage1lpl0u5 };
