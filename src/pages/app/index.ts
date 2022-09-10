import Page from "../../core/templates/page";
import MainPage from "../main";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";

class App {
    private container: HTMLElement;
    private initialPage: MainPage;

    static renderPage(pageId: string) {
        document.body.innerHTML = '';
        let page: Page | null = null;

        if(pageId === 'main-page') {
            page = new MainPage(pageId);
        }else if(pageId === 'settings-page') {
            page = new SettingsPage(pageId);
        }else if(pageId === 'statistics-page') {
            page = new StatisticsPage(pageId);
        }
        

        if(page) {
            const pageHTML = page.render();
            document.body.append(pageHTML);
        }
    }

    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main-page');
    }

    run(){
        App.renderPage('main-page')
        // const mainPageHTML = this.initialPage.render()
        // this.container.append(mainPageHTML)
    }
}

export default App

// main, settings, statistics