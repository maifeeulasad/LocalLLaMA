import React, { lazy, Suspense } from 'react';

const Page1mjwcac = lazy(() => import('./Page'));

const LazyPage1mjwcac = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjwcac />
  </Suspense>
);

export { LazyPage1mjwcac };
