import React, { lazy, Suspense } from 'react';

const Page1m5p69p = lazy(() => import('./Page'));

const LazyPage1m5p69p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5p69p />
  </Suspense>
);

export { LazyPage1m5p69p };
