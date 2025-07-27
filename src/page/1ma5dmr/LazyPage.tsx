import React, { lazy, Suspense } from 'react';

const Page1ma5dmr = lazy(() => import('./Page'));

const LazyPage1ma5dmr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma5dmr />
  </Suspense>
);

export { LazyPage1ma5dmr };
