import React, { lazy, Suspense } from 'react';

const Page1lwmk0y = lazy(() => import('./Page'));

const LazyPage1lwmk0y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwmk0y />
  </Suspense>
);

export { LazyPage1lwmk0y };
