import React, { lazy, Suspense } from 'react';

const Page1mf9vr7 = lazy(() => import('./Page'));

const LazyPage1mf9vr7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf9vr7 />
  </Suspense>
);

export { LazyPage1mf9vr7 };
