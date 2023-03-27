/**
 * Text field sub-types
 * @public
 */
export const TextInputType = {
    /**
     * An email TextField
     */
    email: "email",

    /**
     * A password TextField
     */
    password: "password",

    /**
     * A telephone TextField
     */
    tel: "tel",

    /**
     * A text TextField
     */
    text: "text",

    /**
     * A URL TextField
     */
    url: "url",
} as const;

/**
 * Types for the text field sub-types
 * @public
 */
export type TextInputType = typeof TextInputType[keyof typeof TextInputType];
