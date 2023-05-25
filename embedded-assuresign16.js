import { css, html, LitElement, styleMap, until } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class EmbeddedAssureSign extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
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
      }
    `;

    static redirectUrl = '';

    static properties = {
        src: { type: String },
        content: { type: String },
        envelopeName: { type: String },
        height: { type: String },
        signerName: { type: String },
        signerEmail: { type: String },
        signerPhone: { type: String },
        assureSignApiUsername: { type: String },
        assureSignApiKey: { type: String },
        assureSignTemplateId: { type: String },
    }

    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'Embedded-AssureSign',
            fallbackDisableSubmit: false,
            description: 'IFrame component which can render AssureSign envelope',
            iconUrl: "pen",
            groupName: 'signature',
            version: '1.3',
            properties: {
                height: {
                    type: 'string',
                    title: 'Height',
                    description: 'Height of the component',
                },
                envelopeName: {
                    type: 'string',
                    title: 'Envelope Name'
                },
                signerEmail: {
                    type: 'string',
                    title: 'Signer Email'
                },
                signerName: {
                    type: 'string',
                    title: 'Signer Name'
                },
                signerPhone: {
                    type: 'string',
                    title: 'Signer Phone Number'
                },
                assureSignApiUsername: {
                    type: 'string',
                    title: 'AssureSign API Username'
                },
                assureSignApiKey: {
                    type: 'string',
                    title: 'AssureSign API Password'

                },
                assureSignApiUserEmail: {
                    type: 'string',
                    title: 'AssureSign API User Email'
                },
                assureSignTemplateId: {
                    type: 'string',
                    title: 'AssureSign template Id'
                }
            },
            standardProperties: {
                readOnly: true,
                description: true,
            }
        };
    }

    async load() {
        const apiUserBody = {
            "request": {
                "apiUsername": this.assureSignApiUsername,
                "key": this.assureSignApiKey,
                "contextUsername": this.assureSignApiUserEmail,
                "sessionLengthInMinutes": 60
            }
        };

        const response = await fetch('https://account.assuresign.net/api/v3.7/authentication/apiUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //                 'Origin': 'http://localhost:8080'
            },
            body: JSON.stringify(apiUserBody)
        });

        const jsonResponse = await response.json();

        const token = jsonResponse.result.token;

        const submitBody = {
            "request": {
                "placeholders": [],
                "templates": [
                    {
                        "templateID": this.assureSignTemplateId,
                        "values": [
                            {
                                "name": "Envelope Name 2 ",
                                "value": this.envelopeName
                            },
                            {
                                "name": "Language",
                                "value": "en-US"
                            },
                            {
                                "name": "Signer 1 Name",
                                "value": this.signerName
                            },
                            {
                                "name": "Signer 1 Email",
                                "value": this.signerEmail
                            },
                            {
                                "name": "Signer 1 Phone",
                                "value": this.signerPhone
                            },
                            {
                                "name": "Patient Name",
                                "value": this.signerName
                            },
                            {
                                "name": "Patient Email",
                                "value": this.signerEmail
                            }
                        ]
                    }
                ]
            }
        }

        const submit = await fetch('https://sb.assuresign.net/api/documentnow/v3.7/submit',
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json',
                    //                 'Origin': 'http://localhost:8080'
                },
                body: JSON.stringify(submitBody)
            });

        const jsonSubmit = await submit.json();

        const envelopeId = jsonSubmit.result.envelopeID;
        sessionStorage.setItem('envelopeId', envelopeId);
        const signingLinks = await fetch('https://sb.assuresign.net/api/documentnow/v3.7/envelope/' + envelopeId + '/signingLinks',
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }
        );

        const jsonSigningLinks = await signingLinks.json();

        let styles = { height: this.height };
        //         return html`
        //             <iframe
        //             class="frame"
        //             style=${styleMap(styles)}
        //             allow="geolocation *; microphone; camera"
        //             src=${jsonSigningLinks.result.signingLinks[0].url}
        //             ></iframe>`;
        sessionStorage.setItem('redirectUrl', jsonSigningLinks.result.signingLinks[0].url);
        return jsonSigningLinks.result.signingLinks[0].url;
    }

    constructor() {
        super();
        this.envelopeName = 'Envelope Name',
            this.height = '900px'
    }

    async connectedCallback() {
        super.connectedCallback();
        this.content = this.load();
    }

    updateFieldValue(selector, updatedValue) {
        document.querySelector(selector).value = updatedValue;
        document.querySelector(selector).focus();
        document.querySelector(selector).blur();
    }


    // Render the UI as a function of component state
    render() {
        let timer = setInterval(function () {
            if (document.querySelector('.redirect-label').offsetParent != null) {
                if (sessionStorage.getItem('redirectUrl')) {
                    // document.querySelectorAll("#actionpanel1-group-control button").forEach(function (item) {
                    //     if (item.innerHTML.trim().toLowerCase() === "continue" || item.innerHTML.trim().toLowerCase() === "submit") {
                    //         let flag = false;
                    //         let inputList = document.querySelectorAll('.lilly-multiple-choice input');
                    //         inputList.forEach(function (item) {
                    //             if (item.checked) {
                    //                 flag = true;
                    //             }
                    //         });
                    //         if(flag == true) {
                    //             item.addEventListener("click", function (e) {
                    //                 window.location.replace(sessionStorage.getItem('redirectUrl'));
                    //                 clearInterval(timer);
                    //             })
                    //         }
                    //     }
                    // });


                    let flag = false;
                    let inputList = document.querySelectorAll('.lilly-multiple-choice input');
                    inputList.forEach(function (item) {
                        if (item.checked) {
                            flag = true;
                        }
                    });
                    if (flag == true) {
                        document.querySelector(".lilly-hidden-correlation input").value = sessionStorage.getItem('envelopeId');
                        document.querySelector(".lilly-hidden-correlation input").focus();
                        document.querySelector(".lilly-hidden-correlation input").blur();
                        document.querySelector(".lilly-hidden-signerurl input").value = sessionStorage.getItem('redirectUrl');
                        document.querySelector(".lilly-hidden-signerurl input").focus();
                        document.querySelector(".lilly-hidden-signerurl input").blur();
                        let chkbox = document.querySelector('.lilly-hidden-urldirect input');
                        if (chkbox.checked == false) {
                            chkbox.click();
                        }
                    } else {
                        let chkbox = document.querySelector('.lilly-hidden-urldirect input');
                        if (chkbox.checked == true) {
                            chkbox.click();
                        }
                    }
                    // clearInterval(timer);
                }
            }
        }, 10);
        return html``;
        // return html`${until(this.content, html`<span>Loading...</span>`)}`
    }
}

// registering the web component.
const elementName = 'embedded-assuresign';
customElements.define(elementName, EmbeddedAssureSign);
