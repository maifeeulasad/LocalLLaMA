import React, { lazy, Suspense } from 'react';

const Page1mhiqqn = lazy(() => import('./Page'));

const LazyPage1mhiqqn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhiqqn />
  </Suspense>
);

export { LazyPage1mhiqqn };
