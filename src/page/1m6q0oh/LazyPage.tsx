import React, { lazy, Suspense } from 'react';

const Page1m6q0oh = lazy(() => import('./Page'));

const LazyPage1m6q0oh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6q0oh />
  </Suspense>
);

export { LazyPage1m6q0oh };
