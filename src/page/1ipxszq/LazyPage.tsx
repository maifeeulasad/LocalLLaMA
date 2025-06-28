import React, { lazy, Suspense } from 'react';

const Page1ipxszq = lazy(() => import('./Page'));

const LazyPage1ipxszq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ipxszq />
  </Suspense>
);

export { LazyPage1ipxszq };
