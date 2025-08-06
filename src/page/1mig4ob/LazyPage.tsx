import React, { lazy, Suspense } from 'react';

const Page1mig4ob = lazy(() => import('./Page'));

const LazyPage1mig4ob = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mig4ob />
  </Suspense>
);

export { LazyPage1mig4ob };
