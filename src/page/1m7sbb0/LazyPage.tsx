import React, { lazy, Suspense } from 'react';

const Page1m7sbb0 = lazy(() => import('./Page'));

const LazyPage1m7sbb0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7sbb0 />
  </Suspense>
);

export { LazyPage1m7sbb0 };
