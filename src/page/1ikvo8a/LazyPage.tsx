import React, { lazy, Suspense } from 'react';

const Page1ikvo8a = lazy(() => import('./Page'));

const LazyPage1ikvo8a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ikvo8a />
  </Suspense>
);

export { LazyPage1ikvo8a };
