import React, { lazy, Suspense } from 'react';

const Page1med9hx = lazy(() => import('./Page'));

const LazyPage1med9hx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1med9hx />
  </Suspense>
);

export { LazyPage1med9hx };
