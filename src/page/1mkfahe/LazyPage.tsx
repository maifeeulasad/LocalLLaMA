import React, { lazy, Suspense } from 'react';

const Page1mkfahe = lazy(() => import('./Page'));

const LazyPage1mkfahe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkfahe />
  </Suspense>
);

export { LazyPage1mkfahe };
