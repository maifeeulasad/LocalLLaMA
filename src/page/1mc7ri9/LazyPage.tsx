import React, { lazy, Suspense } from 'react';

const Page1mc7ri9 = lazy(() => import('./Page'));

const LazyPage1mc7ri9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc7ri9 />
  </Suspense>
);

export { LazyPage1mc7ri9 };
