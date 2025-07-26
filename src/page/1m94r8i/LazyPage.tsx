import React, { lazy, Suspense } from 'react';

const Page1m94r8i = lazy(() => import('./Page'));

const LazyPage1m94r8i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m94r8i />
  </Suspense>
);

export { LazyPage1m94r8i };
