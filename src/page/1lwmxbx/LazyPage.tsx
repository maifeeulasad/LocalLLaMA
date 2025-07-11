import React, { lazy, Suspense } from 'react';

const Page1lwmxbx = lazy(() => import('./Page'));

const LazyPage1lwmxbx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwmxbx />
  </Suspense>
);

export { LazyPage1lwmxbx };
