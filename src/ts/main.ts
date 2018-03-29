import {app, BrowserWindow} from 'electron';

export class MyApp {
    mainWindow: Electron.BrowserWindow | null = null;

    constructor(public app: Electron.App) {
        this.app.on('window-all-closed', this.windowAllClosed);
        this.app.on('ready', () => {
            this.mainWindow = new BrowserWindow({
                width: 800, height: 600
            });
    
            this.mainWindow.on('closed', (event: Electron.Event) => {
                this.mainWindow = null;
            });
    
            this.mainWindow.loadURL('file://${__dirname}/../public/index.html');
    
            this.mainWindow.webContents.openDevTools();
        });
    }

    windowAllClosed() {
        if (process.platform != 'darwin') {
            setTimeout(() => {this.app.quit(); }, 50);
        }
    }
}

const myapp = new MyApp(app);