import React, { lazy, Suspense } from 'react';

const Page1m4ag6u = lazy(() => import('./Page'));

const LazyPage1m4ag6u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4ag6u />
  </Suspense>
);

export { LazyPage1m4ag6u };
