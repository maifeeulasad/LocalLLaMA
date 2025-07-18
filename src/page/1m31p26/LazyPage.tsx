import React, { lazy, Suspense } from 'react';

const Page1m31p26 = lazy(() => import('./Page'));

const LazyPage1m31p26 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m31p26 />
  </Suspense>
);

export { LazyPage1m31p26 };
