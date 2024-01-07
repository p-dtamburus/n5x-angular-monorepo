import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'onboarding',
  exposes: {
    './Routes': 'apps/onboarding/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
