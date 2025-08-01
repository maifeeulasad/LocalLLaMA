import React, { lazy, Suspense } from 'react';

const Page1me095p = lazy(() => import('./Page'));

const LazyPage1me095p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me095p />
  </Suspense>
);

export { LazyPage1me095p };
