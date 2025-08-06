import React, { lazy, Suspense } from 'react';

const Page1mifc2l = lazy(() => import('./Page'));

const LazyPage1mifc2l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mifc2l />
  </Suspense>
);

export { LazyPage1mifc2l };
