import React, { lazy, Suspense } from 'react';

const Page1mjk9ia = lazy(() => import('./Page'));

const LazyPage1mjk9ia = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjk9ia />
  </Suspense>
);

export { LazyPage1mjk9ia };
