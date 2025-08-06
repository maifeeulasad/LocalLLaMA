import React, { lazy, Suspense } from 'react';

const Page1miivw7 = lazy(() => import('./Page'));

const LazyPage1miivw7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miivw7 />
  </Suspense>
);

export { LazyPage1miivw7 };
