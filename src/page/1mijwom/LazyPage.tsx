import React, { lazy, Suspense } from 'react';

const Page1mijwom = lazy(() => import('./Page'));

const LazyPage1mijwom = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijwom />
  </Suspense>
);

export { LazyPage1mijwom };
