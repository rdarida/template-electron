import { ElectronApi } from './preload';

declare global {
  const electronApi: ElectronApi;
}
