import React, { lazy, Suspense } from 'react';

const Page1miw809 = lazy(() => import('./Page'));

const LazyPage1miw809 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miw809 />
  </Suspense>
);

export { LazyPage1miw809 };
