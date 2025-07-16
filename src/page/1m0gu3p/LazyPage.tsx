import React, { lazy, Suspense } from 'react';

const Page1m0gu3p = lazy(() => import('./Page'));

const LazyPage1m0gu3p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0gu3p />
  </Suspense>
);

export { LazyPage1m0gu3p };
