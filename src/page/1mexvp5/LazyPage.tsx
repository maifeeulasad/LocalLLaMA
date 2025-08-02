import React, { lazy, Suspense } from 'react';

const Page1mexvp5 = lazy(() => import('./Page'));

const LazyPage1mexvp5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mexvp5 />
  </Suspense>
);

export { LazyPage1mexvp5 };
