import React, { lazy, Suspense } from 'react';

const Page1lvr3ym = lazy(() => import('./Page'));

const LazyPage1lvr3ym = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvr3ym />
  </Suspense>
);

export { LazyPage1lvr3ym };
