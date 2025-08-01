import React, { lazy, Suspense } from 'react';

const Page1mepinc = lazy(() => import('./Page'));

const LazyPage1mepinc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mepinc />
  </Suspense>
);

export { LazyPage1mepinc };
