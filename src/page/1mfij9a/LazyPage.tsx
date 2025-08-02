import React, { lazy, Suspense } from 'react';

const Page1mfij9a = lazy(() => import('./Page'));

const LazyPage1mfij9a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfij9a />
  </Suspense>
);

export { LazyPage1mfij9a };
