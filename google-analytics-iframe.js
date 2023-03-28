import {css, html, LitElement, styleMap} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GoogleAnalyticsIFrame extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`  //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
      :host {
        height: 100%;
        width: 100%;
        display: block;
      }

      .frame {
        display: inline-block;
        height: 100%;
        width: 100%;
        background-color: transparent;
        border: none;
        display: none;
        visibility: hidden;
      }
    `;

    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'GoogleAnalytics-Iframe',
            fallbackDisableSubmit: false,
            description: 'IFrame component which can render url view with the frame',
            iconUrl: "one-line-text",
            groupName: 'Visual',
            version: '1.3',
            properties: { //Custom configuration fields. See https://help.nintex.com/en-US/formplugins/Reference/CustomField.htm
                src: {
                    type: 'string',
                    title: 'Source URL',
                    description: 'URL of the iframe, please note many sites block been rendered in iframes'
                },
                height: {
                    type: 'string',
                    title: 'Height',
                    description: 'Height of the component',
                }
            },
            standardProperties: {
                readOnly: true,  //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
                required: true,
                description: true,
            }
        };
    }

    static properties = {
        name: 'GA',
        title: 'GA',
        src: 'https://www.googletagmanager.com/ns.html?id=GTM-PXL5B34',
        height: '100%'
    }

    // Render the UI as a function of component state
    render() {
        let styles = {height: this.height};

        return html`
            <iframe
                    class="frame"
                    style=${styleMap(styles)}
                    name=${this.name}
                    allow="geolocation *; microphone; camera"
                    title=${this.title}
                    src=${this.src}
            ></iframe>`;
    }
}

// registering the web component.
const elementName = 'lilly-ga-iframe';
customElements.define(elementName, GoogleAnalyticsIFrame);
