/**
 * A custom HTML element for rendering text with the Noto Emoji font.
 * This element wraps its content in a shadow DOM and applies specific styles.
 * 
 * Example usage:
 * <emoji>😊</emoji>
 */
class EmojiElement extends HTMLElement {
    /**
     * Constructs the EmojiElement and initializes its shadow DOM.
     */
    constructor() {
        super();

        // Attach a shadow DOM to the custom element
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a wrapper span element for the content
        const wrapper = document.createElement('span');
        wrapper.textContent = this.textContent;
        wrapper.className = 'emoji';

        // Create a style element to define custom styles
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Noto+Emoji:wght@400&display=swap');

            :host {
                font-size: inherit;
                line-height: inherit;
                color: inherit;
                background-color: inherit;
                display: inline;
            }

            .emoji {
                font-family: 'Noto Emoji';
                font-weight: 400;
            }
        `;

        // Append the style and wrapper to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

// Define the custom element with the tag name 'emoji'
customElements.define('mk-emoji', EmojiElement);