import React, { lazy, Suspense } from 'react';

const Page1mihyr9 = lazy(() => import('./Page'));

const LazyPage1mihyr9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mihyr9 />
  </Suspense>
);

export { LazyPage1mihyr9 };
