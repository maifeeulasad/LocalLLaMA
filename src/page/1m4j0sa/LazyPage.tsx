import React, { lazy, Suspense } from 'react';

const Page1m4j0sa = lazy(() => import('./Page'));

const LazyPage1m4j0sa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4j0sa />
  </Suspense>
);

export { LazyPage1m4j0sa };
