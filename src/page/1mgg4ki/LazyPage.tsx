import React, { lazy, Suspense } from 'react';

const Page1mgg4ki = lazy(() => import('./Page'));

const LazyPage1mgg4ki = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgg4ki />
  </Suspense>
);

export { LazyPage1mgg4ki };
