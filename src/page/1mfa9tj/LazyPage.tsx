import React, { lazy, Suspense } from 'react';

const Page1mfa9tj = lazy(() => import('./Page'));

const LazyPage1mfa9tj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfa9tj />
  </Suspense>
);

export { LazyPage1mfa9tj };
