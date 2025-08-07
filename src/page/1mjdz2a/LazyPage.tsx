import React, { lazy, Suspense } from 'react';

const Page1mjdz2a = lazy(() => import('./Page'));

const LazyPage1mjdz2a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjdz2a />
  </Suspense>
);

export { LazyPage1mjdz2a };
