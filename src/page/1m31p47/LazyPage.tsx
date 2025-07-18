import React, { lazy, Suspense } from 'react';

const Page1m31p47 = lazy(() => import('./Page'));

const LazyPage1m31p47 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m31p47 />
  </Suspense>
);

export { LazyPage1m31p47 };
