import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

let mainWindow: Electron.BrowserWindow;

let v = new Vue({
    el: "#app",
    template: `
        <div> Hello {{name}}</div>
        Name: <input v-model="name" type="text">
        `,
    data: {
        name: "World"
    }
});


class MyApp {
    mainWindow: Electron.BrowserWindow | null = null;
 
    constructor(public app: Electron.App) {
        this.app.on('window-all-closed', () => {
            if (process.platform != 'darwin') {
                setTimeout(() => { this.app.quit(); }, 50);
            }
        });
 
        this.app.on('ready', () => {
            this.mainWindow = new BrowserWindow({
                width: 800,
                height: 545,
                minWidth: 80,
                minHeight: 45
            });
       
            this.mainWindow.on('closed', (event: Electron.Event) => {
                this.mainWindow = null;
            });
 
            mainWindow.loadURL(url.format({
                pathname: path.join(__dirname, "../index.html"),
                protocol: "file:",
                slashes: true,
            }));
 
            // this.mainWindow.webContents.openDevTools();
        });
    }
}
 
const myapp = new MyApp(app);



import Vue from 'vue';
import App from './App.vue';
 
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});