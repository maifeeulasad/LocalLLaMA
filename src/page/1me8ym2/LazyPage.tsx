import React, { lazy, Suspense } from 'react';

const Page1me8ym2 = lazy(() => import('./Page'));

const LazyPage1me8ym2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me8ym2 />
  </Suspense>
);

export { LazyPage1me8ym2 };
