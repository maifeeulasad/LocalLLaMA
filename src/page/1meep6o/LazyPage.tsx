import React, { lazy, Suspense } from 'react';

const Page1meep6o = lazy(() => import('./Page'));

const LazyPage1meep6o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meep6o />
  </Suspense>
);

export { LazyPage1meep6o };
