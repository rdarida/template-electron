// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

import { Channel } from '_types_';

const electronApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  invoke: <T>(channel: Channel, ...args: any[]): Promise<T> =>
    ipcRenderer.invoke(channel, ...args)
};

contextBridge.exposeInMainWorld('electronApi', electronApi);

export type ElectronApi = typeof electronApi;
