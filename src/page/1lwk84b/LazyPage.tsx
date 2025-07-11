import React, { lazy, Suspense } from 'react';

const Page1lwk84b = lazy(() => import('./Page'));

const LazyPage1lwk84b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwk84b />
  </Suspense>
);

export { LazyPage1lwk84b };
