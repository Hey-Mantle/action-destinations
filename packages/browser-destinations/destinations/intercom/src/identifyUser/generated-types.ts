// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * A unique identifier for the user.
   */
  user_id?: string
  /**
   * The user's custom attributes.
   */
  custom_traits?: {
    [k: string]: unknown
  }
  /**
   * The user's name.
   */
  name?: string
  /**
   * The user's phone number.
   */
  phone?: string
  /**
   * The user's email unsubscribe status.
   */
  unsubscribed_from_emails?: boolean
  /**
   * The user's messenger language (instead of relying on browser language settings).
   */
  language_override?: string
  /**
   * The user's email address.
   */
  email?: string
  /**
   * The time the user was created in your system.
   */
  created_at?: string | number
  /**
   * The URL for the user's avatar/profile image.
   */
  avatar_image_url?: string
  /**
   * The user hash used for identity verification. See [Intercom docs](https://www.intercom.com/help/en/collections/12295815-messenger-security) for more information on how to set this field.
   */
  user_hash?: string
  /**
   * The intercom user JWT is used to secure your messenger for your users. See [Intercom docs](https://www.intercom.com/help/en/collections/12295815-messenger-security) for more information on how to set this field.
   */
  intercom_user_jwt?: string
  /**
   * The user's company.
   */
  company?: {
    /**
     * The unique identifier of the company.
     */
    company_id: string
    /**
     * The name of the company.
     */
    name: string
    /**
     * The time the company was created in your system.
     */
    created_at?: string | number
    /**
     * The name of the plan you have associated with the company.
     */
    plan?: string
    /**
     * The monthly spend of the company, e.g. how much revenue the company generates for your business.
     */
    monthly_spend?: number
    /**
     * The number of employees in the company.
     */
    size?: number
    /**
     * The URL for the company website.
     */
    website?: string
    /**
     * The industry that the company operates in.
     */
    industry?: string
    /**
     * The custom attributes for the company object.
     */
    company_custom_traits?: {
      [k: string]: unknown
    }
  }
  /**
   * The array of companies the user is associated to.
   */
  companies?: {
    /**
     * The unique identifier of the company.
     */
    company_id: string
    /**
     * The name of the company.
     */
    name: string
    /**
     * The time the company was created in your system.
     */
    created_at?: string | number
    /**
     * The name of the plan you have associated with the company.
     */
    plan?: string
    /**
     * The monthly spend of the company, e.g. how much revenue the company generates for your business.
     */
    monthly_spend?: number
    /**
     * The number of employees in the company.
     */
    size?: number
    /**
     * The URL for the company website.
     */
    website?: string
    /**
     * The industry that the company operates in.
     */
    industry?: string
    /**
     * The custom attributes for the company object.
     */
    company_custom_traits?: {
      [k: string]: unknown
    }
  }[]
  /**
   * Selectively show the chat widget. As per [Intercom docs](https://www.intercom.com/help/en/articles/189-turn-off-show-or-hide-the-intercom-messenger), you want to first hide the Messenger for all users inside the Intercom UI using Messenger settings. Then think about how you want to programmatically decide which users you would like to show the widget to.
   */
  hide_default_launcher?: boolean
}
