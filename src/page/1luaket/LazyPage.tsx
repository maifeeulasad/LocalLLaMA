import React, { lazy, Suspense } from 'react';

const Page1luaket = lazy(() => import('./Page'));

const LazyPage1luaket = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luaket />
  </Suspense>
);

export { LazyPage1luaket };
