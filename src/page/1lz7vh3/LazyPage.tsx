import React, { lazy, Suspense } from 'react';

const Page1lz7vh3 = lazy(() => import('./Page'));

const LazyPage1lz7vh3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz7vh3 />
  </Suspense>
);

export { LazyPage1lz7vh3 };
