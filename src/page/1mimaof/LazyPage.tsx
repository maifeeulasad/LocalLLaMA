import React, { lazy, Suspense } from 'react';

const Page1mimaof = lazy(() => import('./Page'));

const LazyPage1mimaof = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mimaof />
  </Suspense>
);

export { LazyPage1mimaof };
