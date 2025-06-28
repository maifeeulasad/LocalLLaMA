import React, { lazy, Suspense } from 'react';

const Page1ll57uz = lazy(() => import('./Page'));

const LazyPage1ll57uz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ll57uz />
  </Suspense>
);

export { LazyPage1ll57uz };
