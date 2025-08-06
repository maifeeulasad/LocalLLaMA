import React, { lazy, Suspense } from 'react';

const Page1mivoq2 = lazy(() => import('./Page'));

const LazyPage1mivoq2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mivoq2 />
  </Suspense>
);

export { LazyPage1mivoq2 };
