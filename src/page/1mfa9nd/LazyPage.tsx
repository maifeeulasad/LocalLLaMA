import React, { lazy, Suspense } from 'react';

const Page1mfa9nd = lazy(() => import('./Page'));

const LazyPage1mfa9nd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfa9nd />
  </Suspense>
);

export { LazyPage1mfa9nd };
