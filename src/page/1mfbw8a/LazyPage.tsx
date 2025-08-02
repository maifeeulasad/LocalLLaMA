import React, { lazy, Suspense } from 'react';

const Page1mfbw8a = lazy(() => import('./Page'));

const LazyPage1mfbw8a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfbw8a />
  </Suspense>
);

export { LazyPage1mfbw8a };
