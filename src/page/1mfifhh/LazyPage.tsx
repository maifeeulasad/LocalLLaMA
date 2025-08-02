import React, { lazy, Suspense } from 'react';

const Page1mfifhh = lazy(() => import('./Page'));

const LazyPage1mfifhh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfifhh />
  </Suspense>
);

export { LazyPage1mfifhh };
