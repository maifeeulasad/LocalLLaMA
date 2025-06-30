import React, { lazy, Suspense } from 'react';

const Page1lnrda7 = lazy(() => import('./Page'));

const LazyPage1lnrda7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnrda7 />
  </Suspense>
);

export { LazyPage1lnrda7 };
