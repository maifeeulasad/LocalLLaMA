import React, { lazy, Suspense } from 'react';

const Page1miiktg = lazy(() => import('./Page'));

const LazyPage1miiktg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miiktg />
  </Suspense>
);

export { LazyPage1miiktg };
