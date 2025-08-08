import React, { lazy, Suspense } from 'react';

const Page1mkg7m7 = lazy(() => import('./Page'));

const LazyPage1mkg7m7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkg7m7 />
  </Suspense>
);

export { LazyPage1mkg7m7 };
