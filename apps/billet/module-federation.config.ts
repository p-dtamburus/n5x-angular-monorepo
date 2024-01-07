import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'billet',
  exposes: {
    './Routes': 'apps/billet/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
