import { join } from 'node:path';

import { program } from 'commander';
import { BrowserWindow, app, ipcMain } from 'electron';
import started from 'electron-squirrel-startup';

import { Channel, CommandLineOptions } from '_types_';

import { productName } from '../package.json';

if (started) {
  app.quit();
}

program
  .name(productName)
  .version(app.getVersion())
  .option('-d, --devTools', 'Open DevTools')
  .allowUnknownOption()
  .parse(process.argv);

function getIcon(): string | undefined {
  const icon = join(app.getAppPath(), 'assets', 'icon');

  switch (process.platform) {
    case 'win32':
      return icon + '.ico';

    case 'darwin':
      return undefined;

    default:
      return icon + '.png';
  }
}

const createWindow = () => {
  const options = program.opts<CommandLineOptions>();

  const mainWindow = new BrowserWindow({
    title: `${productName} ${app.getVersion()}`,
    icon: getIcon(),
    minWidth: 1080,
    minHeight: 720,
    width: 1080,
    height: 720,
    show: false,
    webPreferences: {
      preload: join(__dirname, 'preload.js')
    }
  });

  const show = (): void => {
    mainWindow.show();

    if (options.devTools) {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
  };

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL).then(show);
  } else {
    mainWindow
      .loadFile(
        join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
      )
      .then(show);
  }

  ipcMain.handle(Channel.COUNTER_INCREMENT, (e, value: number) => value + 1);
  ipcMain.handle(Channel.COUNTER_DECREMENT, (e, value: number) => value - 1);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
