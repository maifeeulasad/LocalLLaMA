import React, { lazy, Suspense } from 'react';

const Page1mdug0j = lazy(() => import('./Page'));

const LazyPage1mdug0j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdug0j />
  </Suspense>
);

export { LazyPage1mdug0j };
