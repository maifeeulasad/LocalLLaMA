import React, { lazy, Suspense } from 'react';

const Page1ltks5a = lazy(() => import('./Page'));

const LazyPage1ltks5a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltks5a />
  </Suspense>
);

export { LazyPage1ltks5a };
