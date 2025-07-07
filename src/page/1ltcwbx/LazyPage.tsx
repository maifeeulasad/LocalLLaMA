import React, { lazy, Suspense } from 'react';

const Page1ltcwbx = lazy(() => import('./Page'));

const LazyPage1ltcwbx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltcwbx />
  </Suspense>
);

export { LazyPage1ltcwbx };
