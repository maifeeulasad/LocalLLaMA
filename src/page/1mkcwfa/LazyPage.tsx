import React, { lazy, Suspense } from 'react';

const Page1mkcwfa = lazy(() => import('./Page'));

const LazyPage1mkcwfa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkcwfa />
  </Suspense>
);

export { LazyPage1mkcwfa };
