import React, { lazy, Suspense } from 'react';

const Page1mkk5p9 = lazy(() => import('./Page'));

const LazyPage1mkk5p9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkk5p9 />
  </Suspense>
);

export { LazyPage1mkk5p9 };
