import React, { lazy, Suspense } from 'react';

const Page1miwneu = lazy(() => import('./Page'));

const LazyPage1miwneu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miwneu />
  </Suspense>
);

export { LazyPage1miwneu };
