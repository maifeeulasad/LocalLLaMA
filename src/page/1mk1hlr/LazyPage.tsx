import React, { lazy, Suspense } from 'react';

const Page1mk1hlr = lazy(() => import('./Page'));

const LazyPage1mk1hlr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk1hlr />
  </Suspense>
);

export { LazyPage1mk1hlr };
