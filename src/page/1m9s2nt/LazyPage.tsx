import React, { lazy, Suspense } from 'react';

const Page1m9s2nt = lazy(() => import('./Page'));

const LazyPage1m9s2nt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9s2nt />
  </Suspense>
);

export { LazyPage1m9s2nt };
