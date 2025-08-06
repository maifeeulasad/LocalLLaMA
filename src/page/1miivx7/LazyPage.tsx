import React, { lazy, Suspense } from 'react';

const Page1miivx7 = lazy(() => import('./Page'));

const LazyPage1miivx7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miivx7 />
  </Suspense>
);

export { LazyPage1miivx7 };
