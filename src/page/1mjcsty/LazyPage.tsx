import React, { lazy, Suspense } from 'react';

const Page1mjcsty = lazy(() => import('./Page'));

const LazyPage1mjcsty = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjcsty />
  </Suspense>
);

export { LazyPage1mjcsty };
