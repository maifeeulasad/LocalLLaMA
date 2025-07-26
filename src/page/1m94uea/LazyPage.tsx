import React, { lazy, Suspense } from 'react';

const Page1m94uea = lazy(() => import('./Page'));

const LazyPage1m94uea = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m94uea />
  </Suspense>
);

export { LazyPage1m94uea };
