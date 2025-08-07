import React, { lazy, Suspense } from 'react';

const Page1mj9690 = lazy(() => import('./Page'));

const LazyPage1mj9690 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj9690 />
  </Suspense>
);

export { LazyPage1mj9690 };
