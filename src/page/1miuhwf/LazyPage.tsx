import React, { lazy, Suspense } from 'react';

const Page1miuhwf = lazy(() => import('./Page'));

const LazyPage1miuhwf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miuhwf />
  </Suspense>
);

export { LazyPage1miuhwf };
