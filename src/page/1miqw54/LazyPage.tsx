import React, { lazy, Suspense } from 'react';

const Page1miqw54 = lazy(() => import('./Page'));

const LazyPage1miqw54 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miqw54 />
  </Suspense>
);

export { LazyPage1miqw54 };
