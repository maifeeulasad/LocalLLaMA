import React, { lazy, Suspense } from 'react';

const Page1i88g4y = lazy(() => import('./Page'));

const LazyPage1i88g4y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1i88g4y />
  </Suspense>
);

export { LazyPage1i88g4y };
