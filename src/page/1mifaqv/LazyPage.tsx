import React, { lazy, Suspense } from 'react';

const Page1mifaqv = lazy(() => import('./Page'));

const LazyPage1mifaqv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mifaqv />
  </Suspense>
);

export { LazyPage1mifaqv };
