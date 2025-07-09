import React, { lazy, Suspense } from 'react';

const Page1lus2yw = lazy(() => import('./Page'));

const LazyPage1lus2yw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lus2yw />
  </Suspense>
);

export { LazyPage1lus2yw };
