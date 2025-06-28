import React, { lazy, Suspense } from 'react';

const Page1ll38zu = lazy(() => import('./Page'));

const LazyPage1ll38zu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ll38zu />
  </Suspense>
);

export { LazyPage1ll38zu };
