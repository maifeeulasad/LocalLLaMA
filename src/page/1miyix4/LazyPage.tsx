import React, { lazy, Suspense } from 'react';

const Page1miyix4 = lazy(() => import('./Page'));

const LazyPage1miyix4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miyix4 />
  </Suspense>
);

export { LazyPage1miyix4 };
