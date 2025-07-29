import React, { lazy, Suspense } from 'react';

const Page1mc5e54 = lazy(() => import('./Page'));

const LazyPage1mc5e54 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc5e54 />
  </Suspense>
);

export { LazyPage1mc5e54 };
