import React, { lazy, Suspense } from 'react';

const Page1lxehv3 = lazy(() => import('./Page'));

const LazyPage1lxehv3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxehv3 />
  </Suspense>
);

export { LazyPage1lxehv3 };
