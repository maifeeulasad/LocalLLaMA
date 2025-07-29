import React, { lazy, Suspense } from 'react';

const Page1mc6fbp = lazy(() => import('./Page'));

const LazyPage1mc6fbp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc6fbp />
  </Suspense>
);

export { LazyPage1mc6fbp };
