import React, { lazy, Suspense } from 'react';

const Page1miiesj = lazy(() => import('./Page'));

const LazyPage1miiesj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miiesj />
  </Suspense>
);

export { LazyPage1miiesj };
