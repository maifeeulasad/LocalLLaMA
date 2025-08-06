import React, { lazy, Suspense } from 'react';

const Page1miz7vr = lazy(() => import('./Page'));

const LazyPage1miz7vr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miz7vr />
  </Suspense>
);

export { LazyPage1miz7vr };
