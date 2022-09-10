import Page from "../../core/templates/page";
import MainPage from "../main";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";
import Header from "../../core/components/header";
import ErrorPage, { ErrorTypes } from "../error";

export const enum PageIDs {
    MainPage = 'main-page',
    SettingsPage = 'settings-page',
    StatisticsPage = 'statistics-page',
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private initialPage: MainPage;
    private header: Header;

    static renderPage(pageId: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
        if(currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;

        if(pageId === PageIDs.MainPage) {
            page = new MainPage(pageId);
        } else if (pageId === PageIDs.SettingsPage) {
            page = new SettingsPage(pageId);
        } else if (pageId === PageIDs.StatisticsPage) {
            page = new StatisticsPage(pageId);
        } else {
            page = new ErrorPage(pageId, ErrorTypes.Error_404);
        }
        

        if(page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            console.log('Hash changed', hash);
            App.renderPage(hash);
        })
    }

    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header', 'header-container')
    }

    run(){
        App.container.append(this.header.render());
        App.renderPage('main-page');
        this.enableRouteChange();
        // const mainPageHTML = this.initialPage.render()
        // this.container.append(mainPageHTML)
    }
}

export default App

// main, settings, statistics