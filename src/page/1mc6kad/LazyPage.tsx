import React, { lazy, Suspense } from 'react';

const Page1mc6kad = lazy(() => import('./Page'));

const LazyPage1mc6kad = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc6kad />
  </Suspense>
);

export { LazyPage1mc6kad };
