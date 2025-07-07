import React, { lazy, Suspense } from 'react';

const Page1ltdi5y = lazy(() => import('./Page'));

const LazyPage1ltdi5y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltdi5y />
  </Suspense>
);

export { LazyPage1ltdi5y };
