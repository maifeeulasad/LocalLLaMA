import React, { lazy, Suspense } from 'react';

const Page1ly4zh8 = lazy(() => import('./Page'));

const LazyPage1ly4zh8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly4zh8 />
  </Suspense>
);

export { LazyPage1ly4zh8 };
