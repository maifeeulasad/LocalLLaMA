import React, { lazy, Suspense } from 'react';

const Page1llvz0g = lazy(() => import('./Page'));

const LazyPage1llvz0g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llvz0g />
  </Suspense>
);

export { LazyPage1llvz0g };
