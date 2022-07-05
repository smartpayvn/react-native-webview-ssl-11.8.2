import { Component } from 'react';
// eslint-disable-next-line
import { IOSWebViewProps, AndroidWebViewProps, WindowsWebViewProps } from './lib/WebViewTypes';

export { FileDownload, WebViewMessageEvent, WebViewNavigation } from "./lib/WebViewTypes";

export type WebViewProps = IOSWebViewProps & AndroidWebViewProps & WindowsWebViewProps;

declare class WebView<P = {}> extends Component<WebViewProps & P> {
    /**
     * Go back one page in the webview's history.
     */
    goBack: () => void;

    /**
     * Go forward one page in the webview's history.
     */
    goForward: () => void;

    /**
     * Reloads the current page.
     */
    reload: () => void;

    /**
     * Stop loading the current page.
     */
    stopLoading(): void;

    /**
     * Executes the JavaScript string.
     */
    injectJavaScript: (script: string) => void;

    /**
     * Executes the JavaScript string on main thread.
     */
    injectJavaScriptOnMainThread: (script: string) => void;

    /**
     * (iOS only)
     * Set the JavaScript string after content loaded.
     */
    setInjectedJavaScript: (script: string) => void;

    /**
     * (iOS only)
     * Set the JavaScript string before content loaded.
     */
    setInjectedJavaScriptBeforeContentLoaded: (script: string) => void;

    /**
     * (iOS only)
     * Set the main frame only for the JavaScript loaded.
     */
    setInjectedJavaScriptForMainFrameOnly: (mainFrameOnly: boolean) => void;

    /**
     * Focuses on WebView redered page.
     */
    requestFocus: () => void;
    
     /**
     * Posts a message to WebView.
     */
    postMessage: (message: string) => void;
    
     /**
     * (Android only)
     * Removes the autocomplete popup from the currently focused form field, if present.
     */
    clearFormData?: () => void;

     /**
     * (Android only)
     * Clears the resource cache. Note that the cache is per-application, so this will clear the cache for all WebViews used.
     */
    clearCache?: (clear: boolean) => void;

     /**
     * (Android only)
     * Tells this WebView to clear its internal back/forward list.
     */
    clearHistory?: () => void;
}

export {WebView};
export default WebView;
