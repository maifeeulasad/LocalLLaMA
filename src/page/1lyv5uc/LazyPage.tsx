import React, { lazy, Suspense } from 'react';

const Page1lyv5uc = lazy(() => import('./Page'));

const LazyPage1lyv5uc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyv5uc />
  </Suspense>
);

export { LazyPage1lyv5uc };
