import React, { useEffect } from 'react';

export default function Sejal_jagtar() {
  useEffect(() => {
    const container = document.getElementById('sejal_jagtar-container');
    if (container) {
      const scripts = container.querySelectorAll('script');
      scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    }
  }, []);

  return (
    <div id="sejal_jagtar-container" dangerouslySetInnerHTML={{ __html: `<!doctype html>
<html xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml" lang="en-US"  >
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- This is Squarespace. --><!-- helix-saxophone-rzrp -->
<base href="/">
<meta charset="utf-8" />
<title>General 1</title>
<meta http-equiv="Accept-CH" content="Sec-CH-UA-Platform-Version, Sec-CH-UA-Model" /><link rel="icon" type="image/jpeg" href="favicon_new.jpg"/>
<link rel="icon" type="image/jpeg" href="favicon_new.jpg"/>
<link rel="canonical" href="/sejal-jagtar"/>
<meta property="og:site_name" content="The Cinewale"/>
<meta property="og:title" content="General 1"/>
<meta property="og:url" content="https://epicstories.in/sejal-jagtar"/>
<meta property="og:type" content="website"/>
<meta itemprop="name" content="General 1"/>
<meta itemprop="url" content="https://epicstories.in/sejal-jagtar"/>
<meta name="twitter:title" content="General 1"/>
<meta name="twitter:url" content="https://epicstories.in/sejal-jagtar"/>
<meta name="twitter:card" content="summary"/>
<meta name="description" content="" />
<link rel="preconnect" href="https://images.squarespace-cdn.com">
<link rel="preconnect" href="https://use.typekit.net" crossorigin>
<link rel="preconnect" href="https://p.typekit.net" crossorigin>
<script type="text/javascript" src="https://use.typekit.net/ik/-8LY6_zubNq--i5_vmoo1agTzLfVbxN5v0N5uPlZfQXfe7JIfFHN4UJLFRbh52jhWDjk52wtZcsywAbtweJhFDj3FD8cjhF8Fg7AMkG0jAFu-WsoShFGZAsude80ZkoRdhXCHKoyjamTiY8Djhy8ZYmC-Ao1Oco8if37OcBDOcu8OfG0-emC-W6lShBtdagGdho8OW4ES1M0SaBujW48Sagyjh90jhNlOfG0SaBujW48SagyjhmDjhy8ZYmC-Ao1OcFzdPUyjamTiY8Djhy8ZYmC-Ao1OcFzdPUyjamTiY8Djhy8ZYmC-Ao1Oco8ifUySkolZPU8Se8RSaszSc88SkoTdKUGZAUTpfuDjWyzSeyzdc9lS1TkSfoDSWmyScmDSeBRZPoRdhXCdeNRjAUGdaFXOYFUiABkZWF3jAF8ShFGZAsude80ZkoRdhXCiaiaOcBRiA8XpWFR-emqiAUTdcS0jhNlOYiaikoyjamTiY8Djhy8ZYmC-Ao1Oco8ifUaiaS0jWw0dA9CiaiaOcm3-AFDieNk-AmDOc80OYiaikoGZAUTpfuDjWyzSeyzdc9lS1TkSfoDSWmyScmDSeBRZPoRdhXCiaiaO1FUiABkZWF3jAF8ShFGZAsude80ZkoRdhXK2YgkdayTdAIldcNhjPG4f5J7IMMjMkMfH6GJCwbgIMMjgPMfH6qJnbIbMg6eJMJ7fbKOMsMMeMS6MKG4f5w7IMMj2PMfH6GJCSbgIMMj2kMfH6qJRMIbMg6sJMHbMppg846e.js" async fetchpriority="high" onload="try{Typekit.load();}catch(e){} document.documentElement.classList.remove('wf-loading');"></script>
<script>document.documentElement.classList.add('wf-loading')</script>
<style>@keyframes fonts-loading { 0%, 99% { color: transparent; } } html.wf-loading * { animation: fonts-loading 3s; }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<link rel="preconnect" href="https://file.squarespace-cdn.com" crossorigin>
<style data-sqsp-font-ids="6a3139e4691a2d058d1a1be6">
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/95402d3d-cf4f-4ff3-b652-fa1bddbe79de/latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/31f2dfaf-de1e-40ab-ac18-8641e6ac98d0/devanagari.woff2') format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/ab5cf469-e78c-4791-92a2-a2e360e24c1d/latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/28866714-3a03-4fde-b82e-bcffd944752e/latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/ab6b1da4-72e3-4abf-a176-e7a8a24b53d1/latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/7d30df3b-ed0a-4cdd-824a-b3c7e5e49f0d/devanagari.woff2') format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/106cf02d-1fea-47b3-beaa-607012f765b3/latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/2200ecd2-8cab-4e5f-98a1-74a7a1427ea4/devanagari.woff2') format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/abb8d202-34bc-4174-a25f-c00d4154bb44/latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/d03c0883-8248-47bf-9fa3-437f8474b0b7/latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/da0c3c0d-458f-46e2-9c64-bac004d4e8c1/latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/7050a57e-968a-4317-a487-11e4374878d9/devanagari.woff2') format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/e5441b3f-475c-4dd0-815e-d1493a6eef24/latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/e364ec28-4783-442b-b46f-59d33a99dd2c/devanagari.woff2') format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('https://file.squarespace-cdn.com/content/v2/namespaces/fonts/libraries/sqsp/assets/67451c8f-d5ad-40d0-a48b-1e842ade5679/latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><script type="text/javascript" crossorigin="anonymous" defer="true" nomodule="nomodule" src="https://assets.squarespace.com/@sqs/polyfiller/1.6/legacy.js"></script>
<script type="text/javascript" crossorigin="anonymous" defer="true" src="https://assets.squarespace.com/@sqs/polyfiller/1.6/modern.js"></script>
<script data-name="static-context">Static = window.Static || {}; Static.SQUARESPACE_CONTEXT = {"betaFeatureFlags":["product_list_filters_v2_separate_categories","campaigns_import_discounts","campaigns_discount_section_in_blasts","enable_modernized_standalone_pages_kill_switch","scripts_defer","i18n_beta_website_locales","new_stacked_index","enable_form_submission_trigger","commerce_product_payment_plan_editing","order_status_page_checkout_landing_enabled","contacts_and_campaigns_redesign","public_api_discounts_enabled","nested_categories","enable_modernized_pdp_m3_layout_ux","override_block_styles","supports_versioned_template_assets","marketing_automations","campaigns_discount_section_in_automations","member_areas_feature","campaigns_merch_state","output_template_css_assets","modernized-pdp-m2-enabled","enable_modernized_pdp_m3_fluid","campaigns_table_v2","campaigns_thumbnail_layout","campaigns_new_image_layout_picker","marketing_landing_page"],"facebookAppId":"314192535267336","facebookApiVersion":"v6.0","rollups":{"squarespace-announcement-bar":{"js":"//assets.squarespace.com/universal/scripts-compressed/announcement-bar-da64554dbd3cf639-min.en-US.js"},"squarespace-audio-player":{"css":"//assets.squarespace.com/universal/styles-compressed/audio-player-b05f5197a871c566-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/audio-player-5ba91753c1a0052d-min.en-US.js"},"squarespace-blog-collection-list":{"css":"//assets.squarespace.com/universal/styles-compressed/blog-collection-list-b4046463b72f34e2-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/blog-collection-list-804d48b04f8cd8a1-min.en-US.js"},"squarespace-calendar-block-renderer":{"css":"//assets.squarespace.com/universal/styles-compressed/calendar-block-renderer-c3fef2a497c8e56b-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/calendar-block-renderer-34147ce275815644-min.en-US.js"},"squarespace-chartjs-helpers":{"css":"//assets.squarespace.com/universal/styles-compressed/chartjs-helpers-96b256171ee039c1-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/chartjs-helpers-09376c2f45ec20f7-min.en-US.js"},"squarespace-comments":{"css":"//assets.squarespace.com/universal/styles-compressed/comments-bbd94cde9cedbee0-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/comments-33e7fbabe9e51f03-min.en-US.js"},"squarespace-custom-css-popup":{"css":"//assets.squarespace.com/universal/styles-compressed/custom-css-popup-0604093d6735335b-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/custom-css-popup-14bc0659277ebbaa-min.en-US.js"},"squarespace-dialog":{"css":"//assets.squarespace.com/universal/styles-compressed/dialog-86aacd645d83874c-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/dialog-5aa3a9abfa101701-min.en-US.js"},"squarespace-events-collection":{"css":"//assets.squarespace.com/universal/styles-compressed/events-collection-c3fef2a497c8e56b-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/events-collection-4f16f5603d75ef79-min.en-US.js"},"squarespace-form-rendering-utils":{"js":"//assets.squarespace.com/universal/scripts-compressed/form-rendering-utils-cab2493dfe8919fe-min.en-US.js"},"squarespace-forms":{"css":"//assets.squarespace.com/universal/styles-compressed/forms-0afd3c6ac30bbab1-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/forms-7469ebf827dd0718-min.en-US.js"},"squarespace-gallery-collection-list":{"css":"//assets.squarespace.com/universal/styles-compressed/gallery-collection-list-b4046463b72f34e2-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/gallery-collection-list-7b9e3df420b8fb7f-min.en-US.js"},"squarespace-image-zoom":{"css":"//assets.squarespace.com/universal/styles-compressed/image-zoom-b4046463b72f34e2-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/image-zoom-8fb2d4ed417f5ff2-min.en-US.js"},"squarespace-pinterest":{"css":"//assets.squarespace.com/universal/styles-compressed/pinterest-b4046463b72f34e2-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/pinterest-420a25b00dabf62f-min.en-US.js"},"squarespace-popup-overlay":{"css":"//assets.squarespace.com/universal/styles-compressed/popup-overlay-b742b752f5880972-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/popup-overlay-e4d3f35e31adad3c-min.en-US.js"},"squarespace-product-quick-view":{"css":"//assets.squarespace.com/universal/styles-compressed/product-quick-view-0afd3c6ac30bbab1-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/product-quick-view-54eea8f76e868fdb-min.en-US.js"},"squarespace-products-collection-item-v2":{"css":"//assets.squarespace.com/universal/styles-compressed/products-collection-item-v2-b4046463b72f34e2-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/products-collection-item-v2-99be948a1d39ff28-min.en-US.js"},"squarespace-products-collection-list-v2":{"css":"//assets.squarespace.com/universal/styles-compressed/products-collection-list-v2-b4046463b72f34e2-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/products-collection-list-v2-776747e4add9de69-min.en-US.js"},"squarespace-search-page":{"css":"//assets.squarespace.com/universal/styles-compressed/search-page-90a67fc09b9b32c6-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/search-page-d9e33f9c5c863e9b-min.en-US.js"},"squarespace-search-preview":{"js":"//assets.squarespace.com/universal/scripts-compressed/search-preview-86f41f690c3e00ff-min.en-US.js"},"squarespace-simple-liking":{"css":"//assets.squarespace.com/universal/styles-compressed/simple-liking-701bf8bbc05ec6aa-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/simple-liking-69bfa10d1d97bade-min.en-US.js"},"squarespace-social-buttons":{"css":"//assets.squarespace.com/universal/styles-compressed/social-buttons-95032e5fa98e47a5-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/social-buttons-c21b31af899a6e61-min.en-US.js"},"squarespace-tourdates":{"css":"//assets.squarespace.com/universal/styles-compressed/tourdates-b4046463b72f34e2-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/tourdates-605a69fbcbd9fd0a-min.en-US.js"},"squarespace-website-overlays-manager":{"css":"//assets.squarespace.com/universal/styles-compressed/website-overlays-manager-07ea5a4e004e6710-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/website-overlays-manager-09cbb49ae5592c30-min.en-US.js"}},"pageType":2,"website":{"id":"62838fda1d80b676079fcce4","captchaSettings":{"enabledForDonations":false},"cloneable":false,"contentModifiedOn":1762933779928,"formattingLocale":"en-US","fullSiteTitle":"General 1","identifier":"helix-saxophone-rzrp","imageMetadataProcessingEnabled":false,"isHstsEnabled":true,"language":"en-US","location":{},"logoImageId":"677d2dae7190e31e01380ee3","primaryDomain":"epicstories.in","screenshotId":"1ebcb840625e409c2ea55dbbcc6c42f91a0051da891a5adc3054a6b1a83964ea","shareButtonOptions":{"1":true,"2":true,"7":true,"8":true,"3":true,"4":true,"6":true},"showOwnerLogin":false,"siteStatus":{},"siteTitle":"The Cinewale","sslSetting":3,"timeZone":"Asia/Kolkata","translationLocale":"en-US","typekitId":"","websiteType":4,"hasBeenCloneable":false,"statsMigrated":false,"authenticUrl":"https://epicstories.in","baseUrl":"https://epicstories.in","internalUrl":"https://helix-saxophone-rzrp.squarespace.com","logoImageUrl":"//images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/3a05ee7c-a4a0-4a00-ac56-56db747febdd/epic+logo.png","machineTimeZoneOffset":19800000,"socialAccounts":[{"serviceId":69,"screenname":"YouTube","addedOn":1655105132990,"profileUrl":"https://youtube.com/channel/UCnC7RMAOh3os86bdGU3r-uw","iconEnabled":true,"serviceName":"youtube-unauth"},{"serviceId":64,"screenname":"Instagram","addedOn":1655105048451,"profileUrl":"https://www.instagram.com/epicstories.in/?igshid=YmMyMTA2M2Y%3D","iconEnabled":true,"serviceName":"instagram-unauth"},{"serviceId":60,"screenname":"Facebook","addedOn":1661240906447,"profileUrl":"http://facebook.com/epicstories.in","iconEnabled":true,"serviceName":"facebook-unauth"}],"timeZoneAbbr":"IST","timeZoneOffset":19800000},"websiteSettings":{"id":"62838fda1d80b676079fcd00","websiteId":"62838fda1d80b676079fcce4","subjects":[],"country":"IN","state":"MH","simpleLikingEnabled":true,"mobileInfoBarSettings":{"style":1,"isContactEmailEnabled":false,"isContactPhoneNumberEnabled":false,"isLocationEnabled":false,"isBusinessHoursEnabled":false},"announcementBarSettings":{"style":1},"popupOverlaySettings":{"style":1,"enabledPages":[]},"commentLikesAllowed":true,"commentAnonAllowed":true,"commentThreaded":true,"commentApprovalRequired":false,"commentAvatarsOn":true,"commentSortType":2,"commentFlagThreshold":0,"commentFlagsAllowed":true,"commentEnableByDefault":true,"commentDisableAfterDaysDefault":0,"disqusShortname":"","commentsEnabled":true,"businessHours":{},"storeSettings":{"returnPolicy":null,"termsOfService":null,"privacyPolicy":null,"expressCheckout":false,"continueShoppingLinkUrl":"/","useLightCart":false,"showNoteField":false,"shippingCountryDefaultValue":"US","billToShippingDefaultValue":false,"showShippingPhoneNumber":true,"isShippingPhoneRequired":false,"showBillingPhoneNumber":true,"isBillingPhoneRequired":false,"currenciesSupported":["USD","CAD","GBP","AUD","EUR","CHF","NOK","SEK","DKK","NZD","SGD","MXN","HKD","CZK","ILS","MYR","RUB","PHP","PLN","THB","BRL","ARS","COP","IDR","INR","JPY","ZAR"],"defaultCurrency":"USD","selectedCurrency":"INR","measurementStandard":1,"showCustomCheckoutForm":false,"checkoutPageMarketingOptInEnabled":true,"enableMailingListOptInByDefault":false,"sameAsRetailLocation":false,"merchandisingSettings":{"scarcityEnabledOnProductItems":false,"scarcityEnabledOnProductBlocks":false,"scarcityMessageType":"DEFAULT_SCARCITY_MESSAGE","scarcityThreshold":10,"multipleQuantityAllowedForServices":true,"restockNotificationsEnabled":false,"restockNotificationsSuccessText":"","restockNotificationsMailingListSignUpEnabled":false,"relatedProductsEnabled":false,"relatedProductsOrdering":"random","soldOutVariantsDropdownDisabled":false,"productComposerOptedIn":false,"productComposerABTestOptedOut":false,"productReviewsEnabled":false},"minimumOrderSubtotalEnabled":false,"minimumOrderSubtotal":{"currency":"INR","value":"0.00"},"addToCartConfirmationType":2,"isLive":false,"multipleQuantityAllowedForServices":true},"useEscapeKeyToLogin":false,"ssBadgeType":1,"ssBadgePosition":4,"ssBadgeVisibility":1,"ssBadgeDevices":1,"pinterestOverlayOptions":{"mode":"disabled"},"userAccountsSettings":{"loginAllowed":false,"signupAllowed":false}},"cookieSettings":{"isCookieBannerEnabled":false,"isRestrictiveCookiePolicyEnabled":false,"cookieBannerText":"","cookieBannerTheme":"","cookieBannerVariant":"","cookieBannerPosition":"","cookieBannerCtaVariant":"","cookieBannerCtaText":"","cookieBannerAcceptType":"OPT_IN","cookieBannerOptOutCtaText":"","cookieBannerHasOptOut":false,"cookieBannerHasManageCookies":true,"cookieBannerManageCookiesLabel":"","cookieBannerSavedPreferencesText":"","cookieBannerSavedPreferencesLayout":"PILL"},"websiteCloneable":false,"collection":{"title":"Sejal Jagtar","id":"67b2dc234cd7762cdddd6f58","fullUrl":"/sejal-jagtar","type":10,"permissionType":1},"subscribed":false,"appDomain":"squarespace.com","templateTweakable":true,"tweakJSON":{"form-use-theme-colors":"true","header-logo-height":"70px","header-mobile-logo-max-height":"30px","header-vert-padding":"0.3vw","header-width":"Inset","maxPageWidth":"1800px","mobile-header-vert-padding":"6vw","pagePadding":"3vw","tweak-blog-alternating-side-by-side-image-aspect-ratio":"1:1 Square","tweak-blog-alternating-side-by-side-image-spacing":"5%","tweak-blog-alternating-side-by-side-meta-spacing":"15px","tweak-blog-alternating-side-by-side-primary-meta":"Categories","tweak-blog-alternating-side-by-side-read-more-spacing":"5px","tweak-blog-alternating-side-by-side-secondary-meta":"Date","tweak-blog-basic-grid-columns":"2","tweak-blog-basic-grid-image-aspect-ratio":"3:2 Standard","tweak-blog-basic-grid-image-spacing":"30px","tweak-blog-basic-grid-meta-spacing":"15px","tweak-blog-basic-grid-primary-meta":"Categories","tweak-blog-basic-grid-read-more-spacing":"15px","tweak-blog-basic-grid-secondary-meta":"Date","tweak-blog-item-custom-width":"60","tweak-blog-item-show-author-profile":"false","tweak-blog-item-width":"Medium","tweak-blog-masonry-columns":"3","tweak-blog-masonry-horizontal-spacing":"53px","tweak-blog-masonry-image-spacing":"25px","tweak-blog-masonry-meta-spacing":"0px","tweak-blog-masonry-primary-meta":"None","tweak-blog-masonry-read-more-spacing":"5px","tweak-blog-masonry-secondary-meta":"None","tweak-blog-masonry-vertical-spacing":"100px","tweak-blog-side-by-side-image-aspect-ratio":"1:1 Square","tweak-blog-side-by-side-image-spacing":"6%","tweak-blog-side-by-side-meta-spacing":"20px","tweak-blog-side-by-side-primary-meta":"Categories","tweak-blog-side-by-side-read-more-spacing":"5px","tweak-blog-side-by-side-secondary-meta":"Date","tweak-blog-single-column-image-spacing":"40px","tweak-blog-single-column-meta-spacing":"30px","tweak-blog-single-column-primary-meta":"Categories","tweak-blog-single-column-read-more-spacing":"30px","tweak-blog-single-column-secondary-meta":"Date","tweak-events-stacked-show-thumbnails":"true","tweak-events-stacked-thumbnail-size":"3:2 Standard","tweak-fixed-header":"false","tweak-fixed-header-style":"Scroll Back","tweak-global-animations-animation-curve":"ease","tweak-global-animations-animation-delay":"0.6s","tweak-global-animations-animation-duration":"0.90s","tweak-global-animations-animation-style":"fade","tweak-global-animations-animation-type":"fade","tweak-global-animations-complexity-level":"detailed","tweak-global-animations-enabled":"true","tweak-portfolio-grid-basic-custom-height":"50","tweak-portfolio-grid-overlay-custom-height":"50","tweak-portfolio-hover-follow-acceleration":"10%","tweak-portfolio-hover-follow-animation-duration":"Medium","tweak-portfolio-hover-follow-animation-type":"Fade","tweak-portfolio-hover-follow-delimiter":"Forward Slash","tweak-portfolio-hover-follow-front":"false","tweak-portfolio-hover-follow-layout":"Inline","tweak-portfolio-hover-follow-size":"75","tweak-portfolio-hover-follow-text-spacing-x":"1.5","tweak-portfolio-hover-follow-text-spacing-y":"1.5","tweak-portfolio-hover-static-animation-duration":"Medium","tweak-portfolio-hover-static-animation-type":"Scale Up","tweak-portfolio-hover-static-delimiter":"Forward Slash","tweak-portfolio-hover-static-front":"false","tweak-portfolio-hover-static-layout":"Stacked","tweak-portfolio-hover-static-size":"75","tweak-portfolio-hover-static-text-spacing-x":"1.5","tweak-portfolio-hover-static-text-spacing-y":"1.5","tweak-portfolio-index-background-animation-duration":"Medium","tweak-portfolio-index-background-animation-type":"Fade","tweak-portfolio-index-background-custom-height":"50","tweak-portfolio-index-background-delimiter":"None","tweak-portfolio-index-background-height":"Large","tweak-portfolio-index-background-horizontal-alignment":"Center","tweak-portfolio-index-background-link-format":"Stacked","tweak-portfolio-index-background-persist":"false","tweak-portfolio-index-background-vertical-alignment":"Middle","tweak-portfolio-index-background-width":"Full Bleed","tweak-transparent-header":"true"},"templateId":"5c5a519771c10ba3470d8101","templateVersion":"7.1","pageFeatures":[1,2,4],"gmRenderKey":"QUl6YVN5Q0JUUk9xNkx1dkZfSUUxcjQ2LVQ0QWVUU1YtMGQ3bXk4","templateScriptsRootUrl":"https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/scripts/","impersonatedSession":false,"tzData":{"zones":[[330,null,"IST",null]],"rules":{}},"showAnnouncementBar":false,"recaptchaEnterpriseContext":{"recaptchaEnterpriseSiteKey":"6LdDFQwjAAAAAPigEvvPgEVbb7QBm-TkVJdDTlAv"},"i18nContext":{"timeZoneData":{"id":"Asia/Kolkata","name":"India Standard Time"}},"env":"PRODUCTION","visitorFormContext":{"formFieldFormats":{"countries":[{"name":"Afghanistan","code":"AF","phoneCode":"+93"},{"name":"\u00C5land Islands","code":"AX","phoneCode":"+358"},{"name":"Albania","code":"AL","phoneCode":"+355"},{"name":"Algeria","code":"DZ","phoneCode":"+213"},{"name":"American Samoa","code":"AS","phoneCode":"+1"},{"name":"Andorra","code":"AD","phoneCode":"+376"},{"name":"Angola","code":"AO","phoneCode":"+244"},{"name":"Anguilla","code":"AI","phoneCode":"+1"},{"name":"Antigua & Barbuda","code":"AG","phoneCode":"+1"},{"name":"Argentina","code":"AR","phoneCode":"+54"},{"name":"Armenia","code":"AM","phoneCode":"+374"},{"name":"Aruba","code":"AW","phoneCode":"+297"},{"name":"Ascension Island","code":"AC","phoneCode":"+247"},{"name":"Australia","code":"AU","phoneCode":"+61"},{"name":"Austria","code":"AT","phoneCode":"+43"},{"name":"Azerbaijan","code":"AZ","phoneCode":"+994"},{"name":"Bahamas","code":"BS","phoneCode":"+1"},{"name":"Bahrain","code":"BH","phoneCode":"+973"},{"name":"Bangladesh","code":"BD","phoneCode":"+880"},{"name":"Barbados","code":"BB","phoneCode":"+1"},{"name":"Belarus","code":"BY","phoneCode":"+375"},{"name":"Belgium","code":"BE","phoneCode":"+32"},{"name":"Belize","code":"BZ","phoneCode":"+501"},{"name":"Benin","code":"BJ","phoneCode":"+229"},{"name":"Bermuda","code":"BM","phoneCode":"+1"},{"name":"Bhutan","code":"BT","phoneCode":"+975"},{"name":"Bolivia","code":"BO","phoneCode":"+591"},{"name":"Bosnia & Herzegovina","code":"BA","phoneCode":"+387"},{"name":"Botswana","code":"BW","phoneCode":"+267"},{"name":"Brazil","code":"BR","phoneCode":"+55"},{"name":"British Indian Ocean Territory","code":"IO","phoneCode":"+246"},{"name":"British Virgin Islands","code":"VG","phoneCode":"+1"},{"name":"Brunei","code":"BN","phoneCode":"+673"},{"name":"Bulgaria","code":"BG","phoneCode":"+359"},{"name":"Burkina Faso","code":"BF","phoneCode":"+226"},{"name":"Burundi","code":"BI","phoneCode":"+257"},{"name":"Cambodia","code":"KH","phoneCode":"+855"},{"name":"Cameroon","code":"CM","phoneCode":"+237"},{"name":"Canada","code":"CA","phoneCode":"+1"},{"name":"Cape Verde","code":"CV","phoneCode":"+238"},{"name":"Caribbean Netherlands","code":"BQ","phoneCode":"+599"},{"name":"Cayman Islands","code":"KY","phoneCode":"+1"},{"name":"Central African Republic","code":"CF","phoneCode":"+236"},{"name":"Chad","code":"TD","phoneCode":"+235"},{"name":"Chile","code":"CL","phoneCode":"+56"},{"name":"China","code":"CN","phoneCode":"+86"},{"name":"Christmas Island","code":"CX","phoneCode":"+61"},{"name":"Cocos (Keeling) Islands","code":"CC","phoneCode":"+61"},{"name":"Colombia","code":"CO","phoneCode":"+57"},{"name":"Comoros","code":"KM","phoneCode":"+269"},{"name":"Congo - Brazzaville","code":"CG","phoneCode":"+242"},{"name":"Congo - Kinshasa","code":"CD","phoneCode":"+243"},{"name":"Cook Islands","code":"CK","phoneCode":"+682"},{"name":"Costa Rica","code":"CR","phoneCode":"+506"},{"name":"C\u00F4te d\u2019Ivoire","code":"CI","phoneCode":"+225"},{"name":"Croatia","code":"HR","phoneCode":"+385"},{"name":"Cuba","code":"CU","phoneCode":"+53"},{"name":"Cura\u00E7ao","code":"CW","phoneCode":"+599"},{"name":"Cyprus","code":"CY","phoneCode":"+357"},{"name":"Czechia","code":"CZ","phoneCode":"+420"},{"name":"Denmark","code":"DK","phoneCode":"+45"},{"name":"Djibouti","code":"DJ","phoneCode":"+253"},{"name":"Dominica","code":"DM","phoneCode":"+1"},{"name":"Dominican Republic","code":"DO","phoneCode":"+1"},{"name":"Ecuador","code":"EC","phoneCode":"+593"},{"name":"Egypt","code":"EG","phoneCode":"+20"},{"name":"El Salvador","code":"SV","phoneCode":"+503"},{"name":"Equatorial Guinea","code":"GQ","phoneCode":"+240"},{"name":"Eritrea","code":"ER","phoneCode":"+291"},{"name":"Estonia","code":"EE","phoneCode":"+372"},{"name":"Eswatini","code":"SZ","phoneCode":"+268"},{"name":"Ethiopia","code":"ET","phoneCode":"+251"},{"name":"Falkland Islands","code":"FK","phoneCode":"+500"},{"name":"Faroe Islands","code":"FO","phoneCode":"+298"},{"name":"Fiji","code":"FJ","phoneCode":"+679"},{"name":"Finland","code":"FI","phoneCode":"+358"},{"name":"France","code":"FR","phoneCode":"+33"},{"name":"French Guiana","code":"GF","phoneCode":"+594"},{"name":"French Polynesia","code":"PF","phoneCode":"+689"},{"name":"Gabon","code":"GA","phoneCode":"+241"},{"name":"Gambia","code":"GM","phoneCode":"+220"},{"name":"Georgia","code":"GE","phoneCode":"+995"},{"name":"Germany","code":"DE","phoneCode":"+49"},{"name":"Ghana","code":"GH","phoneCode":"+233"},{"name":"Gibraltar","code":"GI","phoneCode":"+350"},{"name":"Greece","code":"GR","phoneCode":"+30"},{"name":"Greenland","code":"GL","phoneCode":"+299"},{"name":"Grenada","code":"GD","phoneCode":"+1"},{"name":"Guadeloupe","code":"GP","phoneCode":"+590"},{"name":"Guam","code":"GU","phoneCode":"+1"},{"name":"Guatemala","code":"GT","phoneCode":"+502"},{"name":"Guernsey","code":"GG","phoneCode":"+44"},{"name":"Guinea","code":"GN","phoneCode":"+224"},{"name":"Guinea-Bissau","code":"GW","phoneCode":"+245"},{"name":"Guyana","code":"GY","phoneCode":"+592"},{"name":"Haiti","code":"HT","phoneCode":"+509"},{"name":"Honduras","code":"HN","phoneCode":"+504"},{"name":"Hong Kong SAR China","code":"HK","phoneCode":"+852"},{"name":"Hungary","code":"HU","phoneCode":"+36"},{"name":"Iceland","code":"IS","phoneCode":"+354"},{"name":"India","code":"IN","phoneCode":"+91"},{"name":"Indonesia","code":"ID","phoneCode":"+62"},{"name":"Iran","code":"IR","phoneCode":"+98"},{"name":"Iraq","code":"IQ","phoneCode":"+964"},{"name":"Ireland","code":"IE","phoneCode":"+353"},{"name":"Isle of Man","code":"IM","phoneCode":"+44"},{"name":"Israel","code":"IL","phoneCode":"+972"},{"name":"Italy","code":"IT","phoneCode":"+39"},{"name":"Jamaica","code":"JM","phoneCode":"+1"},{"name":"Japan","code":"JP","phoneCode":"+81"},{"name":"Jersey","code":"JE","phoneCode":"+44"},{"name":"Jordan","code":"JO","phoneCode":"+962"},{"name":"Kazakhstan","code":"KZ","phoneCode":"+7"},{"name":"Kenya","code":"KE","phoneCode":"+254"},{"name":"Kiribati","code":"KI","phoneCode":"+686"},{"name":"Kosovo","code":"XK","phoneCode":"+383"},{"name":"Kuwait","code":"KW","phoneCode":"+965"},{"name":"Kyrgyzstan","code":"KG","phoneCode":"+996"},{"name":"Laos","code":"LA","phoneCode":"+856"},{"name":"Latvia","code":"LV","phoneCode":"+371"},{"name":"Lebanon","code":"LB","phoneCode":"+961"},{"name":"Lesotho","code":"LS","phoneCode":"+266"},{"name":"Liberia","code":"LR","phoneCode":"+231"},{"name":"Libya","code":"LY","phoneCode":"+218"},{"name":"Liechtenstein","code":"LI","phoneCode":"+423"},{"name":"Lithuania","code":"LT","phoneCode":"+370"},{"name":"Luxembourg","code":"LU","phoneCode":"+352"},{"name":"Macao SAR China","code":"MO","phoneCode":"+853"},{"name":"Madagascar","code":"MG","phoneCode":"+261"},{"name":"Malawi","code":"MW","phoneCode":"+265"},{"name":"Malaysia","code":"MY","phoneCode":"+60"},{"name":"Maldives","code":"MV","phoneCode":"+960"},{"name":"Mali","code":"ML","phoneCode":"+223"},{"name":"Malta","code":"MT","phoneCode":"+356"},{"name":"Marshall Islands","code":"MH","phoneCode":"+692"},{"name":"Martinique","code":"MQ","phoneCode":"+596"},{"name":"Mauritania","code":"MR","phoneCode":"+222"},{"name":"Mauritius","code":"MU","phoneCode":"+230"},{"name":"Mayotte","code":"YT","phoneCode":"+262"},{"name":"Mexico","code":"MX","phoneCode":"+52"},{"name":"Micronesia","code":"FM","phoneCode":"+691"},{"name":"Moldova","code":"MD","phoneCode":"+373"},{"name":"Monaco","code":"MC","phoneCode":"+377"},{"name":"Mongolia","code":"MN","phoneCode":"+976"},{"name":"Montenegro","code":"ME","phoneCode":"+382"},{"name":"Montserrat","code":"MS","phoneCode":"+1"},{"name":"Morocco","code":"MA","phoneCode":"+212"},{"name":"Mozambique","code":"MZ","phoneCode":"+258"},{"name":"Myanmar (Burma)","code":"MM","phoneCode":"+95"},{"name":"Namibia","code":"NA","phoneCode":"+264"},{"name":"Nauru","code":"NR","phoneCode":"+674"},{"name":"Nepal","code":"NP","phoneCode":"+977"},{"name":"Netherlands","code":"NL","phoneCode":"+31"},{"name":"New Caledonia","code":"NC","phoneCode":"+687"},{"name":"New Zealand","code":"NZ","phoneCode":"+64"},{"name":"Nicaragua","code":"NI","phoneCode":"+505"},{"name":"Niger","code":"NE","phoneCode":"+227"},{"name":"Nigeria","code":"NG","phoneCode":"+234"},{"name":"Niue","code":"NU","phoneCode":"+683"},{"name":"Norfolk Island","code":"NF","phoneCode":"+672"},{"name":"Northern Mariana Islands","code":"MP","phoneCode":"+1"},{"name":"North Korea","code":"KP","phoneCode":"+850"},{"name":"North Macedonia","code":"MK","phoneCode":"+389"},{"name":"Norway","code":"NO","phoneCode":"+47"},{"name":"Oman","code":"OM","phoneCode":"+968"},{"name":"Pakistan","code":"PK","phoneCode":"+92"},{"name":"Palau","code":"PW","phoneCode":"+680"},{"name":"Palestinian Territories","code":"PS","phoneCode":"+970"},{"name":"Panama","code":"PA","phoneCode":"+507"},{"name":"Papua New Guinea","code":"PG","phoneCode":"+675"},{"name":"Paraguay","code":"PY","phoneCode":"+595"},{"name":"Peru","code":"PE","phoneCode":"+51"},{"name":"Philippines","code":"PH","phoneCode":"+63"},{"name":"Poland","code":"PL","phoneCode":"+48"},{"name":"Portugal","code":"PT","phoneCode":"+351"},{"name":"Puerto Rico","code":"PR","phoneCode":"+1"},{"name":"Qatar","code":"QA","phoneCode":"+974"},{"name":"R\u00E9union","code":"RE","phoneCode":"+262"},{"name":"Romania","code":"RO","phoneCode":"+40"},{"name":"Russia","code":"RU","phoneCode":"+7"},{"name":"Rwanda","code":"RW","phoneCode":"+250"},{"name":"Samoa","code":"WS","phoneCode":"+685"},{"name":"San Marino","code":"SM","phoneCode":"+378"},{"name":"S\u00E3o Tom\u00E9 & Pr\u00EDncipe","code":"ST","phoneCode":"+239"},{"name":"Saudi Arabia","code":"SA","phoneCode":"+966"},{"name":"Senegal","code":"SN","phoneCode":"+221"},{"name":"Serbia","code":"RS","phoneCode":"+381"},{"name":"Seychelles","code":"SC","phoneCode":"+248"},{"name":"Sierra Leone","code":"SL","phoneCode":"+232"},{"name":"Singapore","code":"SG","phoneCode":"+65"},{"name":"Sint Maarten","code":"SX","phoneCode":"+1"},{"name":"Slovakia","code":"SK","phoneCode":"+421"},{"name":"Slovenia","code":"SI","phoneCode":"+386"},{"name":"Solomon Islands","code":"SB","phoneCode":"+677"},{"name":"Somalia","code":"SO","phoneCode":"+252"},{"name":"South Africa","code":"ZA","phoneCode":"+27"},{"name":"South Korea","code":"KR","phoneCode":"+82"},{"name":"South Sudan","code":"SS","phoneCode":"+211"},{"name":"Spain","code":"ES","phoneCode":"+34"},{"name":"Sri Lanka","code":"LK","phoneCode":"+94"},{"name":"St. Barth\u00E9lemy","code":"BL","phoneCode":"+590"},{"name":"St. Helena","code":"SH","phoneCode":"+290"},{"name":"St. Kitts & Nevis","code":"KN","phoneCode":"+1"},{"name":"St. Lucia","code":"LC","phoneCode":"+1"},{"name":"St. Martin","code":"MF","phoneCode":"+590"},{"name":"St. Pierre & Miquelon","code":"PM","phoneCode":"+508"},{"name":"St. Vincent & Grenadines","code":"VC","phoneCode":"+1"},{"name":"Sudan","code":"SD","phoneCode":"+249"},{"name":"Suriname","code":"SR","phoneCode":"+597"},{"name":"Svalbard & Jan Mayen","code":"SJ","phoneCode":"+47"},{"name":"Sweden","code":"SE","phoneCode":"+46"},{"name":"Switzerland","code":"CH","phoneCode":"+41"},{"name":"Syria","code":"SY","phoneCode":"+963"},{"name":"Taiwan","code":"TW","phoneCode":"+886"},{"name":"Tajikistan","code":"TJ","phoneCode":"+992"},{"name":"Tanzania","code":"TZ","phoneCode":"+255"},{"name":"Thailand","code":"TH","phoneCode":"+66"},{"name":"Timor-Leste","code":"TL","phoneCode":"+670"},{"name":"Togo","code":"TG","phoneCode":"+228"},{"name":"Tokelau","code":"TK","phoneCode":"+690"},{"name":"Tonga","code":"TO","phoneCode":"+676"},{"name":"Trinidad & Tobago","code":"TT","phoneCode":"+1"},{"name":"Tristan da Cunha","code":"TA","phoneCode":"+290"},{"name":"Tunisia","code":"TN","phoneCode":"+216"},{"name":"T\u00FCrkiye","code":"TR","phoneCode":"+90"},{"name":"Turkmenistan","code":"TM","phoneCode":"+993"},{"name":"Turks & Caicos Islands","code":"TC","phoneCode":"+1"},{"name":"Tuvalu","code":"TV","phoneCode":"+688"},{"name":"U.S. Virgin Islands","code":"VI","phoneCode":"+1"},{"name":"Uganda","code":"UG","phoneCode":"+256"},{"name":"Ukraine","code":"UA","phoneCode":"+380"},{"name":"United Arab Emirates","code":"AE","phoneCode":"+971"},{"name":"United Kingdom","code":"GB","phoneCode":"+44"},{"name":"United States","code":"US","phoneCode":"+1"},{"name":"Uruguay","code":"UY","phoneCode":"+598"},{"name":"Uzbekistan","code":"UZ","phoneCode":"+998"},{"name":"Vanuatu","code":"VU","phoneCode":"+678"},{"name":"Vatican City","code":"VA","phoneCode":"+39"},{"name":"Venezuela","code":"VE","phoneCode":"+58"},{"name":"Vietnam","code":"VN","phoneCode":"+84"},{"name":"Wallis & Futuna","code":"WF","phoneCode":"+681"},{"name":"Western Sahara","code":"EH","phoneCode":"+212"},{"name":"Yemen","code":"YE","phoneCode":"+967"},{"name":"Zambia","code":"ZM","phoneCode":"+260"},{"name":"Zimbabwe","code":"ZW","phoneCode":"+263"}],"initialPhoneFormat":{"id":0,"type":"PHONE_NUMBER","country":"IN","labelLocale":"en-US","fields":[{"type":"FIELD","label":"1","identifier":"1","length":3,"required":false,"metadata":{}},{"type":"SEPARATOR","label":" ","identifier":"Space","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"2","identifier":"2","length":3,"required":false,"metadata":{}},{"type":"SEPARATOR","label":" ","identifier":"Space","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"3","identifier":"3","length":3,"required":false,"metadata":{}},{"type":"SEPARATOR","label":" ","identifier":"Space","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"4","identifier":"4","length":11,"required":false,"metadata":{}}]},"initialNameOrder":"GIVEN_FIRST","initialAddressFormat":{"id":0,"type":"ADDRESS","country":"IN","labelLocale":"en","fields":[{"type":"FIELD","label":"Address Line 1","identifier":"Line1","length":0,"required":true,"metadata":{"autocomplete":"address-line1"}},{"type":"SEPARATOR","label":"\n","identifier":"Newline","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"Address Line 2","identifier":"Line2","length":0,"required":false,"metadata":{"autocomplete":"address-line2"}},{"type":"SEPARATOR","label":"\n","identifier":"Newline","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"City","identifier":"City","length":0,"required":true,"metadata":{"autocomplete":"address-level2"}},{"type":"SEPARATOR","label":" ","identifier":"Space","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"Pin","identifier":"Zip","length":0,"required":true,"metadata":{"autocomplete":"postal-code"}},{"type":"SEPARATOR","label":"\n","identifier":"Newline","length":0,"required":false,"metadata":{}},{"type":"FIELD","label":"State","identifier":"State","length":0,"required":true,"metadata":{"autocomplete":"address-level1"}}]}},"localizedStrings":{"validation":{"noValidSelection":"A valid selection must be made.","invalidUrl":"Must be a valid URL.","stringTooLong":"Value should have a length no longer than {0}.","containsInvalidKey":"{0} contains an invalid key.","invalidTwitterUsername":"Must be a valid Twitter username.","valueOutsideRange":"Value must be in the range {0} to {1}.","invalidPassword":"Passwords should not contain whitespace.","missingRequiredSubfields":"{0} is missing required subfields: {1}","invalidCurrency":"Currency value should be formatted like 1234 or 123.99.","invalidMapSize":"Value should contain exactly {0} elements.","subfieldsRequired":"All fields in {0} are required.","formSubmissionFailed":"Form submission failed. Review the following information: {0}.","invalidCountryCode":"Country code should have an optional plus and up to 4 digits.","invalidDate":"This is not a real date.","required":"{0} is required.","invalidStringLength":"Value should be {0} characters long.","invalidEmail":"Email addresses should follow the format user@domain.com.","invalidListLength":"Value should be {0} elements long.","allEmpty":"Please fill out at least one form field.","missingRequiredQuestion":"Missing a required question.","invalidQuestion":"Contained an invalid question.","captchaFailure":"Captcha validation failed. Please try again.","stringTooShort":"Value should have a length of at least {0}.","invalid":"{0} is not valid.","formErrors":"Form Errors","containsInvalidValue":"{0} contains an invalid value.","invalidUnsignedNumber":"Numbers must contain only digits and no other characters.","invalidName":"Valid names contain only letters, numbers, spaces, ', or - characters."},"submit":"Submit","status":{"title":"{@} Block","learnMore":"Learn more"},"name":{"firstName":"First Name","lastName":"Last Name"},"lightbox":{"openForm":"Open Form"},"likert":{"agree":"Agree","stronglyDisagree":"Strongly Disagree","disagree":"Disagree","stronglyAgree":"Strongly Agree","neutral":"Neutral"},"time":{"am":"AM","second":"Second","pm":"PM","minute":"Minute","amPm":"AM/PM","hour":"Hour"},"notFound":"Form not found.","date":{"yyyy":"YYYY","year":"Year","mm":"MM","day":"Day","month":"Month","dd":"DD"},"phone":{"country":"Country","number":"Number","prefix":"Prefix","areaCode":"Area Code","line":"Line"},"submitError":"Unable to submit form. Please try again later.","address":{"stateProvince":"State/Province","country":"Country","zipPostalCode":"Zip/Postal Code","address2":"Address 2","address1":"Address 1","city":"City"},"email":{"signUp":"Sign up for news and updates"},"required":"(required)","invalidData":"Invalid form data."}}};</script><script type="text/javascript">SQUARESPACE_ROLLUPS = {};</script>
<script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/visitor-site-error-reporter-976d22448e700b77-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-visitor_site_error_reporter');</script>
<script crossorigin="anonymous" src="https://assets.squarespace.com/universal/scripts-compressed/visitor-site-error-reporter-976d22448e700b77-min.en-US.js" defer ></script><script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/extract-css-runtime-6edb13d62116a2ca-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-extract_css_runtime');</script>
<script crossorigin="anonymous" src="https://assets.squarespace.com/universal/scripts-compressed/extract-css-runtime-6edb13d62116a2ca-min.en-US.js" defer ></script><script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/extract-css-moment-js-vendor-a5cfdec1ae227f33-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-extract_css_moment_js_vendor');</script>
<script crossorigin="anonymous" src="https://assets.squarespace.com/universal/scripts-compressed/extract-css-moment-js-vendor-a5cfdec1ae227f33-min.en-US.js" defer ></script><script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/cldr-resource-pack-22bdf933fb74be0d-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-cldr_resource_pack');</script>
<script crossorigin="anonymous" src="https://assets.squarespace.com/universal/scripts-compressed/cldr-resource-pack-22bdf933fb74be0d-min.en-US.js" defer ></script><script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/common-vendors-stable-784b947826b4c445-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-common_vendors_stable');</script>
<script crossorigin="anonymous" src="https://assets.squarespace.com/universal/scripts-compressed/common-vendors-stable-784b947826b4c445-min.en-US.js" defer ></script><script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/common-vendors-166b5a45f20ac1ee-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-common_vendors');</script>
<script crossorigin="anonymous" src="https://assets.squarespace.com/universal/scripts-compressed/common-vendors-166b5a45f20ac1ee-min.en-US.js" defer ></script><script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/common-e8af43ac16f454a3-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-common');</script>
<script crossorigin="anonymous" src="https://assets.squarespace.com/universal/scripts-compressed/common-e8af43ac16f454a3-min.en-US.js" defer ></script><script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/performance-8ada5f716cdf0b91-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-performance');</script>
<script crossorigin="anonymous" src="https://assets.squarespace.com/universal/scripts-compressed/performance-8ada5f716cdf0b91-min.en-US.js" defer ></script><link rel="stylesheet" type="text/css" href="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css"/><link rel="stylesheet" type="text/css" href="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css"/><link rel="stylesheet" type="text/css" href="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.socialLinks/ea7941ee-9223-4382-8f52-37116229a643_617/website.components.socialLinks.styles.css"/><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js"></script><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.socialLinks/ea7941ee-9223-4382-8f52-37116229a643_617/website.components.socialLinks.visitor.js"></script><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js"></script><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js"></script><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js"></script><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js"></script><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js"></script><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js"></script><script defer src="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js"></script><script type="application/ld+json">{"url":"https://epicstories.in","name":"The Cinewale","image":"//images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/3a05ee7c-a4a0-4a00-ac56-56db747febdd/epic+logo.png","@context":"http://schema.org","@type":"WebSite"}</script><script type="application/ld+json">{"address":"","image":"https://static1.squarespace.com/static/62838fda1d80b676079fcce4/t/677d2dae7190e31e01380ee3/1762933779928/","openingHours":"","@context":"http://schema.org","@type":"LocalBusiness"}</script><link rel="stylesheet" type="text/css" href="https://static1.squarespace.com/static/versioned-site-css/62838fda1d80b676079fcce4/83/5c5a519771c10ba3470d8101/62838fda1d80b676079fcd17/1817/site.css?nocustom=true"/><link rel="stylesheet" type="text/css" href="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/versioned-assets/1787074481719-5SD8MH2ZFGQJQJUW0E6F/static.css"/><link rel="stylesheet" type="text/css" href="https://static1.squarespace.com/static/custom-css/62838fda1d80b676079fcce4/62838fda1d80b676079fcd17/0/custom.css"/><meta name="facebook-domain-verification" content="5y0m0yfdy1lnrjfw84z2pyiwizfi8n" />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1840994373742283"
     crossorigin="anonymous"></script><script>Static.COOKIE_BANNER_CAPABLE = true;</script>
<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='plsquarespace';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '472805948980668');fbq('track', "PageView");</script><!-- End of Squarespace Headers -->
    
    
  
<style id="clean-master-theme">
/* Base Body Background #bb9978 (Warm Canvas) */
body, #siteWrapper {
  background-color: #bb9978 !important;
}

/* Header Glassmorphic background */
header, #header, #siteHeader, .header, .header-announcement-wrapper {
  background: rgba(187, 153, 120, 0.95) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(121, 17, 18, 0.2) !important;
}

/* Header Nav Menu Text Color #791112 */
header a,
#header a,
#siteHeader a,
.header-nav-item a,
.header-nav-link,
.header-nav-folder-title,
.header-nav-folder-item a,
.nav-link,
.mobile-nav-link,
.header-menu-nav-item a,
.header-menu-nav-list a,
.header-actions a,
.header-actions button,
.header-title-text a,
.header-nav-item--active a {
  color: #791112 !important;
  fill: #791112 !important;
}

/* Buttons #791112 Background & White Text */
button,
input[type="submit"],
input[type="button"],
.button,
.sqs-button-element--primary,
.sqs-button-element--secondary,
.sqs-button-element--tertiary,
.sqs-block-button-element,
.btn-gold,
.btn-primary,
#sqsLiveSubmitBtn,
#sqsSubmitButton,
#screenshotSubmitBtn,
#epicSubmitBtn {
  background-color: #791112 !important;
  color: #ffffff !important;
  border-color: #791112 !important;
}

button:hover,
input[type="submit"]:hover,
.button:hover,
.sqs-button-element--primary:hover,
.sqs-block-button-element:hover {
  background-color: #981718 !important;
  color: #ffffff !important;
  border-color: #981718 !important;
}

/* Story Cards Grid Gap (40px 30px) & #791112 Crimson Card Boxes */
.user-items-list-item-container,
.user-items-list-simple {
  background-color: transparent !important;
  display: grid !important;
  grid-gap: 40px 30px !important;
  gap: 40px 30px !important;
}

.user-items-list-item-container .list-item,
.user-items-list-simple .list-item,
[data-sqsp-section="auto-layout"] .list-item,
.story-card,
.portfolio-card {
  background-color: #791112 !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  padding: 24px 24px 32px 24px !important;
  margin-bottom: 20px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35) !important;
  box-sizing: border-box !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.user-items-list-item-container .list-item * ,
.user-items-list-simple .list-item * ,
[data-sqsp-section="auto-layout"] .list-item * {
  color: #ffffff !important;
}

.user-items-list-item-container .list-item-content a,
.user-items-list-simple .list-item-content a,
[data-sqsp-section="auto-layout"] .list-item-content a {
  background-color: #ffffff !important;
  color: #791112 !important;
  border: 1px solid #ffffff !important;
}

/* Footer Logo Sizing */
footer img[src*="thecinewale"],
.footer-branding-logo,
[data-section-id="630485c68279d40bf40889db"] img,
footer .sqs-block-image img,
footer .image-block img {
  max-width: 180px !important;
  width: 180px !important;
  height: auto !important;
  object-fit: contain !important;
  display: block !important;
    margin-top: -30px !important;
  margin-left: 0 !important;
  margin-right: auto !important;
  filter: brightness(1.1) !important;
}

@media screen and (max-width: 767px) {
  footer img[src*="thecinewale"],
  .footer-branding-logo {
    max-width: 150px !important;
    width: 150px !important;
    margin: 0 auto 15px auto !important;
  }
}

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>







<style id="transparent-scrolled-header-theme">
/* Initial State: Transparent Header */
header, #header, #siteHeader, .header, .header-announcement-wrapper {
  background: transparent !important;
  background-color: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-bottom: 1px solid transparent !important;
  transition: background-color 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease !important;
}

/* Scrolled State: Solid #791112 Crimson Background */
header.header-is-scrolled,
#header.header-is-scrolled,
#siteHeader.header-is-scrolled,
.header.header-is-scrolled,
header.shrink,
#header.shrink {
  background: #791112 !important;
  background-color: #791112 !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25) !important;
}

/* Scrolled State Navigation Text -> Crisp White on #791112 */
header.header-is-scrolled a,
#header.header-is-scrolled a,
#siteHeader.header-is-scrolled a,
.header.header-is-scrolled .nav-link,
.header.header-is-scrolled .mobile-nav-link,
.header.header-is-scrolled .header-nav-item a {
  color: #ffffff !important;
  fill: #ffffff !important;
}

header.header-is-scrolled a:hover,
#header.header-is-scrolled a:hover {
  color: #fffeff !important;
  opacity: 0.85 !important;
}

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<script id="header-scroll-controller">
document.addEventListener('DOMContentLoaded', function() {
  var headers = document.querySelectorAll('header, #header, #siteHeader, .header');
  if (!headers || headers.length === 0) return;

  function updateHeaderScroll() {
    var isScrolled = window.scrollY > 40;
    headers.forEach(function(h) {
      if (isScrolled) {
        h.classList.add('header-is-scrolled');
      } else {
        h.classList.remove('header-is-scrolled');
      }
    });
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();
});
</script>























<style id="base-body-bg-theme">
/* Base Website Canvas Background Color #faf7f3 */
html, body, #siteWrapper {
  background-color: #faf7f3 !important;
}

/* Page sections without background media */
.page-section:not(.has-background-image):not(.has-background),
section:not(.has-background-image):not(.has-background) {
  background-color: #faf7f3 !important;
}

/* Individual Story Cards on #faf7f3 Canvas -> Pure White #ffffff Card Box with #bb9978 Border */
.user-items-list-item-container .list-item,
.user-items-list-simple .list-item,
[data-sqsp-section="auto-layout"] .list-item,
.story-card,
.portfolio-card {
  background-color: #ffffff !important;
  color: #3d2e24 !important;
  border: 2px solid #bb9978 !important;
  padding: 24px 24px 32px 24px !important;
  margin-bottom: 20px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
  box-sizing: border-box !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease !important;
}

.user-items-list-item-container .list-item:hover,
.user-items-list-simple .list-item:hover,
.story-card:hover {
  transform: translateY(-6px) !important;
  border-color: #791112 !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15) !important;
}

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>











































<style id="master-color-theme">
/* =========================================
   MASTER COLOR THEME (NO SIZE OVERRIDES)
   ========================================= */

/* 1. Story Cards: #ffffff Card Box with #bb9978 Border */
.user-items-list-item-container .list-item,
.user-items-list-simple .list-item,
[data-sqsp-section="auto-layout"] .list-item,
.story-card,
.portfolio-card {
  background-color: #ffffff !important;
  color: #3d2e24 !important;
  border: 2px solid #bb9978 !important;
}

/* 2. Card Titles: #791112 */
body .user-items-list-item-container .list-item-content__title,
body .user-items-list-simple .list-item-content__title,
body [data-sqsp-section="auto-layout"] .list-item-content__title,
body .list-item-content__title * {
  color: #791112 !important;
  -webkit-text-fill-color: #791112 !important;
}

/* 3. Card Subtitles: #bb9978 */
body .user-items-list-item-container .list-item-content__subtitle,
body .user-items-list-simple .list-item-content__subtitle,
body [data-sqsp-section="auto-layout"] .list-item-content__subtitle,
body .list-item-content__subtitle * {
  color: #bb9978 !important;
  fill: #bb9978 !important;
  -webkit-text-fill-color: #bb9978 !important;
}

/* 4. Card Paragraph Descriptions: #7b6650 */
body .user-items-list-item-container .list-item-content__description,
body .user-items-list-simple .list-item-content__description,
body [data-sqsp-section="auto-layout"] .list-item-content__description,
body .list-item-content__description * {
  color: #7b6650 !important;
  fill: #7b6650 !important;
  -webkit-text-fill-color: #7b6650 !important;
}

/* 5. Card Transparent Action Buttons */
.user-items-list-item-container .list-item-content a,
.user-items-list-item-container .list-item-content button,
.user-items-list-simple .list-item-content a,
.user-items-list-simple .list-item-content button,
[data-sqsp-section="auto-layout"] .list-item-content a,
[data-sqsp-section="auto-layout"] .list-item-content button,
.user-items-list-item-container .sqs-button-element--primary,
[data-sqsp-section="auto-layout"] .sqs-button-element--primary,
.list-item-content__button,
.list-item-content .sqs-block-button-element {
  background: transparent !important;
  background-color: transparent !important;
  border: 2px solid #791112 !important;
  color: #791112 !important;
  fill: #791112 !important;
  -webkit-text-fill-color: #791112 !important;
}

.user-items-list-item-container .list-item-content a:hover,
.user-items-list-item-container .list-item-content button:hover,
.user-items-list-simple .list-item-content a:hover,
.user-items-list-simple .list-item-content button:hover,
[data-sqsp-section="auto-layout"] .sqs-button-element--primary:hover,
.list-item-content__button:hover {
  background-color: #791112 !important;
  background: #791112 !important;
  color: #ffffff !important;
  fill: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  border: 2px solid #791112 !important;
}

/* 6. Philosophy Paragraph: #7b6650 */
[data-philosophy-p="true"] {
  color: #7b6650 !important;
  fill: #7b6650 !important;
  -webkit-text-fill-color: #7b6650 !important;
}

[data-philosophy-p="true"] strong {
  color: #7b6650 !important;
  fill: #7b6650 !important;
  -webkit-text-fill-color: #7b6650 !important;
}

/* 7. Headlines: #791112 */
[data-weddings-headline="true"] {
  color: #b48c5b !important;
  fill: #b48c5b !important;
  -webkit-text-fill-color: #b48c5b !important;
}

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<script id="master-color-js">
document.addEventListener('DOMContentLoaded', function() {
  function enforceMasterColors() {
    
    // 1. Philosophy Paragraph -> #7b6650 (Exact Match to avoid bleeding)
    document.querySelectorAll('p, span, div').forEach(function(el) {
      var txt = (el.textContent || '').trim();
      if (txt.includes("Your wedding is more than a day") || txt.includes("We focus on capturing it all") || txt.includes("We focus on capturing it all")) {
        el.style.setProperty('color', '#7b6650', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#7b6650', 'important');
        el.setAttribute('data-philosophy-p', 'true');
      }
    });

    // 2. Main Headlines -> #791112 (Exact Match to avoid bleeding to parents)
    document.querySelectorAll('h1, h2, h3, h4, strong, span').forEach(function(el) {
      var txt = (el.textContent || '').trim();
      if (txt === "CRAFTING WEDDINGS INTO CINEMA" || txt === "CRAFTING WEDDINGS INTO CINEMA") {
        el.style.setProperty('color', '#b48c5b', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#b48c5b', 'important');
        el.setAttribute('data-weddings-headline', 'true');
      }
      if (txt === "A Glimpse Into Our Favourite Love Stories Across The World") {
        el.style.setProperty('color', '#791112', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#791112', 'important');
      }
      if (txt === "Showcasing Films") {
        el.style.setProperty('color', '#fffeff', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#fffeff', 'important');
      }
      if (txt === "Follow Us Along On Instagram") {
        el.style.setProperty('color', '#791112', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#791112', 'important');
      }
      if (txt === "As Featured In") {
        el.style.setProperty('color', '#791112', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#791112', 'important');
      }
    });

    // 3. Card Elements (Subtitles, Paragraphs, Buttons)
    var subtitles = ["Where Two Souls Meet", "Written in the Stars", "A Love in Frames", "The Beginning of Forever"];
    
    document.querySelectorAll('.list-item-content, .user-items-list-item-container li, .list-item').forEach(function(card) {
      
      // Paragraphs -> #7b6650 and Subtitles -> #bb9978
      card.querySelectorAll('.list-item-content__description p, .list-item-content p, .list-item-content span, .list-item-content em').forEach(function(p) {
        var text = (p.textContent || '').trim();
        var isSub = false;
        subtitles.forEach(function(st) {
          if (text.includes(st)) isSub = true;
        });

        if (isSub || p.tagName.toLowerCase() === 'em' || p.classList.contains('list-item-content__subtitle')) {
          p.style.setProperty('color', '#bb9978', 'important');
          p.style.setProperty('-webkit-text-fill-color', '#bb9978', 'important');
        } else if (text.length > 0 && !p.classList.contains('list-item-content__title') && p.tagName.toLowerCase() !== 'a' && p.tagName.toLowerCase() !== 'button') {
          p.style.setProperty('color', '#7b6650', 'important');
          p.style.setProperty('-webkit-text-fill-color', '#7b6650', 'important');
        }
      });

      // Transparent Card Buttons -> #791112 Text & Border
      card.querySelectorAll('a, button').forEach(function(btn) {
        if (btn.textContent.trim().toUpperCase().includes("SEE MORE") || btn.classList.contains('sqs-button-element--primary')) {
          btn.style.setProperty('background-color', 'transparent', 'important');
          btn.style.setProperty('background', 'transparent', 'important');
          btn.style.setProperty('border', '2px solid #791112', 'important');
          btn.style.setProperty('color', '#791112', 'important');
          btn.style.setProperty('-webkit-text-fill-color', '#791112', 'important');
        }
      });
    });
  }

  enforceMasterColors();
  setTimeout(enforceMasterColors, 500);
  setTimeout(enforceMasterColors, 1500);

  var observer = new MutationObserver(enforceMasterColors);
  observer.observe(document.body, { childList: true, subtree: true });
});
</script>










<style id="instagram-grid-theme">
/* =========================================
   INSTAGRAM GALLERY NATIVE CSS GRID FIX
   (Overrides broken local Squarespace JS layout)
   ========================================= */

/* 1. Turn the gallery container into a CSS Grid */
.sqs-block-instagram .sqs-gallery {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important; /* Mobile: 2 columns */
  gap: 4px !important; /* Small white gap matching screenshot */
  width: 100% !important;
  height: auto !important; /* Overrides inline height set by broken JS */
  box-sizing: border-box !important;
}

/* Desktop: 6 columns like the screenshot */
@media (min-width: 768px) {
  .sqs-block-instagram .sqs-gallery {
    grid-template-columns: repeat(6, 1fr) !important;
  }
}

/* 2. Reset the individual slides from absolute positioning */
.sqs-block-instagram .sqs-gallery .slide {
  position: relative !important;
  width: 100% !important;
  height: auto !important;
  aspect-ratio: 4 / 5 !important; /* 4:5 vertical aspect ratio matching original */
  top: auto !important;
  left: auto !important;
  transform: none !important;
  margin: 0 !important;
  padding: 0 !important;
  float: none !important;
  clear: none !important;
  box-sizing: border-box !important;
}

/* 3. Ensure wrappers expand fully */
.sqs-block-instagram .margin-wrapper,
.sqs-block-instagram .image-slide-anchor {
  position: relative !important;
  display: block !important;
    margin-top: -30px !important;
  width: 100% !important;
  height: 100% !important;
  overflow: visible !important;
}

/* 4. Force images to fill their grid cells perfectly */
.sqs-block-instagram .sqs-gallery img {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important; /* Perfect crop without distortion */
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
    margin-top: -30px !important;
}

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<script id="instagram-visibility-js">
document.addEventListener('DOMContentLoaded', function() {
  function forceLoadInstagramImages() {
    var instagramImages = document.querySelectorAll('.sqs-block-instagram img[data-src], .sqs-gallery img[data-src]');
    instagramImages.forEach(function(img) {
      if (!img.getAttribute('src')) {
        img.setAttribute('src', img.getAttribute('data-src'));
      }
    });
  }
  
  // Run immediately and a few times later to catch dynamic rendering
  forceLoadInstagramImages();
  setTimeout(forceLoadInstagramImages, 1000);
  setTimeout(forceLoadInstagramImages, 3000);
});
</script>





<style id="card-button-fix-theme">
/* =========================================
   STORY CARDS BUTTON ALIGNMENT & HEIGHT FIX
   ========================================= */

/* 1. Ensure the card itself stretches */
.user-items-list-item-container .list-item,
.user-items-list-simple .list-item,
[data-sqsp-section="auto-layout"] .list-item {
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
}

/* 2. Force the content area (text + button) to expand */
.user-items-list-item-container .list-item-content,
.user-items-list-simple .list-item-content,
[data-sqsp-section="auto-layout"] .list-item-content {
  display: flex !important;
  flex-direction: column !important;
  flex-grow: 1 !important; 
  height: auto !important; 
}

/* 3. Force the text wrapper to expand, perfectly pushing the button wrapper down */
.user-items-list-item-container .list-item-content__text-wrapper,
.user-items-list-simple .list-item-content__text-wrapper,
[data-sqsp-section="auto-layout"] .list-item-content__text-wrapper {
  flex-grow: 1 !important;
  display: flex !important;
  flex-direction: column !important;
}

/* 4. Button Wrapper pushed to bottom */
.user-items-list-item-container .list-item-content__button-wrapper,
.user-items-list-simple .list-item-content__button-wrapper,
[data-sqsp-section="auto-layout"] .list-item-content__button-wrapper {
  margin-top: auto !important;
  padding-top: 15px !important; /* Some breathing room above button */
}

/* 5. Fix Button Height (make it elegant and shorter) */
.user-items-list-item-container .list-item-content__button-container a,
.user-items-list-simple .list-item-content__button-container a,
[data-sqsp-section="auto-layout"] .list-item-content__button-container a,
.list-item-content .sqs-button-element--primary {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  min-height: auto !important;
  line-height: 1.4 !important;
}

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>











<style id="unified-nav-bar-theme">
/* =========================================
   DYNAMIC NAV BAR: TRANSPARENT TO COLORED
   ========================================= */

/* 1. Base Container - Fixed & Transitions */
#header,
header.header,
#siteHeader {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  z-index: 9999 !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
  /* Smoothly transition background and borders */
  transition: padding 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease, border-color 0.4s ease !important;
  
  border-left: none !important;
  border-right: none !important;
  
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* 2. Base State (Top of page) - Transparent & No Borders */
#header:not(.header-is-scrolled),
header.header:not(.header-is-scrolled) {
  background-color: transparent !important;
  background: transparent !important;
  /* Keep transparent borders to prevent height jitter during transition */
  border-top: 4px solid transparent !important;
  border-bottom: 2px solid transparent !important;
  box-shadow: none !important;
  padding-top: 1.5vw !important;
  padding-bottom: 1.5vw !important;
}

/* 3. Scrolled State - #faf7f3 Background & Colored Borders */
#header.header-is-scrolled,
header.header.header-is-scrolled {
  background-color: #faf7f3 !important;
  background: #faf7f3 !important;
  border-top: 4px solid #791112 !important; /* Crimson Top Border */
  border-bottom: 2px solid #bb9978 !important; /* Tan Bottom Border */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
  padding-top: 0.5vw !important;
  padding-bottom: 0.5vw !important;
}

/* 4. Text Colors - Always #791112 */
.header-nav-item a,
.header-menu-nav-item a,
.header-nav-folder-item a,
.header-title-text a,
.header-nav-item--active a,
.header-is-scrolled .header-nav-item a,
.header-is-scrolled .header-menu-nav-item a,
.header-is-scrolled .header-nav-folder-item a,
.header-is-scrolled .header-title-text a,
.header-is-scrolled .header-nav-item--active a {
  color: #791112 !important;
  fill: #791112 !important;
  -webkit-text-fill-color: #791112 !important;
}

/* 5. Premium Animated Hover Underline */
.header-nav-item a,
.header-menu-nav-item a {
  position: relative !important;
  display: inline-block !important;
  text-transform: uppercase !important;
  letter-spacing: 1.5px !important;
  font-size: 0.85rem !important;
  font-weight: 500 !important;
  padding-bottom: 6px !important;
  transition: opacity 0.3s ease, transform 0.3s ease !important;
}

.header-nav-item a::after,
.header-menu-nav-item a::after {
  content: '' !important;
  position: absolute !important;
  width: 0% !important;
  height: 2px !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  background-color: #791112 !important;
  transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  opacity: 0.8 !important;
}

.header-nav-item a:hover::after,
.header-nav-item--active a::after,
.header-menu-nav-item a:hover::after {
  width: 100% !important;
}

.header-nav-item a:hover,
.header-menu-nav-item a:hover {
  transform: translateY(-1px) !important;
  opacity: 0.9 !important;
}

/* 6. Logo/Title Shrink Animation */
#header .header-title-text a,
#header .header-title-logo img {
  transform-origin: left center !important;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  display: inline-block !important;
}
#header.header-is-scrolled .header-title-text a,
#header.header-is-scrolled .header-title-logo img {
  transform: scale(0.9) !important;
}
#header:not(.header-is-scrolled) .header-title-text a,
#header:not(.header-is-scrolled) .header-title-logo img {
  transform: scale(1) !important;
}

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>















































<style id="epic-stories-navbar-theme">
/* =========================================
   EPIC STORIES STYLE: LOGO LEFT, LINKS RIGHT
   ========================================= */

/* 1. UNIVERSAL RULES (Desktop & Mobile) */
#header, header.header, #siteHeader {
  position: fixed !important;
  top: 0 !important; left: 0 !important; width: 100% !important;
  z-index: 9999 !important;
  background: transparent !important; background-color: transparent !important;
  transition: opacity 0.6s ease, transform 0.6s ease, background-color 0.4s ease !important;
}

#header .header-background, header.header .header-background {
  background: transparent !important; background-color: transparent !important;
  opacity: 0 !important; display: none !important;
}

#header .header-announcement-bar-wrapper, #header .header-inner {
  background: transparent !important; background-color: transparent !important;
  opacity: 1 !important;
}

#header .header-title-logo img { filter: none !important; }

/* Hide header completely on scroll (Keeping the cinematic effect) */
#header.header-is-scrolled, header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
}


/* 2. DESKTOP SPECIFIC RULES */
@media screen and (min-width: 800px) {
  
  #header, header.header { height: 85px !important; } /* A bit taller for an elegant feel */
  
  /* Reset previous hacks so flexbox can flow normally */
  #header .header-announcement-bar-wrapper, #header .header-inner,
  .header-display-desktop, .header-title-nav-wrapper,
  .header-nav, .header-nav-list, .header-title {
    padding: 0 !important; margin: 0 !important; min-height: 0 !important;
    position: static !important;
    transform: none !important;
    left: auto !important; right: auto !important; top: auto !important; bottom: auto !important;
  }

  /* The core Left-Right Split */
  .header-title-nav-wrapper {
    display: flex !important;
    justify-content: space-between !important; /* Forces Logo Left, Nav Right */
    align-items: center !important;
    width: 100% !important;
    overflow: visible !important;
    height: 100% !important;
    padding-left: 5vw !important; /* Edge spacing */
    padding-right: 5vw !important;
    box-sizing: border-box !important;
  }

  /* Left Side: Logo */
  .header-title {
    flex: 0 0 auto !important;
    display: flex !important;
    align-items: center !important;
  }
  
  #header .header-title-logo img {
    max-height: 115px !important; /* Elegant size, fits perfectly in the bar */
    width: auto !important;
    object-fit: contain !important;
    display: block !important;
    margin-top: -30px !important;
  }

  /* Right Side: Nav Links */
  .header-nav {
    flex: 0 0 auto !important;
    display: flex !important;
    align-items: center !important;
  }
  
  .header-nav-list {
    display: flex !important;
    justify-content: flex-end !important;
    align-items: center !important;
    gap: 35px !important;
    margin-top: -30px !important; /* Spacing between words */
  }

  /* Reset all individual item margins from previous split hacks */
  .header-nav-item {
    position: static !important;
    transform: none !important;
    margin: 0 !important; left: auto !important; right: auto !important;
  }
  .header-nav-item:nth-child(n) {
    margin: 0 !important; left: auto !important; right: auto !important;
  }

  /* Typography & Color */
  .header-nav-item a {
    font-size: 1.15rem !important; /* Sleek, readable size */
    font-weight: 500 !important; 
    letter-spacing: 2px !important;
    color: #ffffff !important; 
    fill: #ffffff !important; 
    -webkit-text-fill-color: #ffffff !important;
    text-shadow: 0px 2px 10px rgba(0,0,0,0.3) !important; /* Shadow ensures visibility */
    transition: color 0.3s ease !important;
    text-transform: uppercase !important;
  }
  
  /* Remove Underline for active state */
  .header-nav-item--active a::after,
  .header-nav-item--active a::before {
    display: none !important;
    opacity: 0 !important;
    background: transparent !important;
  }
  .header-nav-item a, 
  .header-nav-item--active a {
    text-decoration: none !important;
    border-bottom: none !important;
  }
}
</style>





<style id="floral-divider-color-fix">
  /* 1. Target the image itself and any WebGL canvas generating the liquid effect */
  img[src*="freepik-export-20240803103330fQJQ"],
  img[data-src*="freepik-export-20240803103330fQJQ"],
  img[srcset*="freepik-export-20240803103330fQJQ"],
  .sqs-block-image:has(img[src*="freepik-export"]) canvas {
    filter: brightness(0) saturate(100%) invert(55%) sepia(62%) saturate(281%) hue-rotate(353deg) brightness(92%) contrast(93%) !important;
  }

  /* 2. Target the block's reveal animation curtain so it matches the new color */
  .sqs-block-image:has(img[src*="freepik-export"]) .fluidImageOverlay,
  .sqs-block-image:has(img[src*="freepik-export"]) .image-slide-cover,
  .sqs-block-image:has(img[src*="freepik-export"]) .sqs-image-content::after,
  .sqs-block-image:has(img[src*="freepik-export"]) .fluid-image-animation-wrapper::after,
  .sqs-block-image:has(img[src*="freepik-export"]) .animation-mask,
  .sqs-block-image:has(img[src*="freepik-export"]) .sqs-image-shape-container::after {
    background-color: #7B6650 !important;
  }
</style>





<style id="instagram-grid-premium">
/* =========================================
   PREMIUM INSTAGRAM GRID STYLING
   ========================================= */

/* Mobile width overrides have been REMOVED to restore native Squarespace responsive behavior */

/* Hover Effects - Dim un-hovered, highlight hovered */
.sqs-block-instagram .sqs-gallery-block-grid:hover .slide {
  opacity: 0.4;
  filter: grayscale(30%);
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.sqs-block-instagram .sqs-gallery-block-grid .slide {
  transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
}

.sqs-block-instagram .sqs-gallery-block-grid .slide:hover {
  opacity: 1 !important;
  filter: grayscale(0%) !important;
  transform: scale(1.03);
  z-index: 10;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* Aesthetic Image Framing */
.sqs-block-instagram .margin-wrapper {
  overflow: hidden !important;
  border-radius: 4px !important; /* Elegant subtle curves */
}

.sqs-block-instagram .margin-wrapper img {
  transition: transform 0.5s ease !important;
}

.sqs-block-instagram .slide:hover .margin-wrapper img {
  transform: scale(1.05) !important; /* Inner zoom effect */
}

/* Hide any messy metadata text under the images */
.sqs-block-instagram .image-slide-title,
.sqs-block-instagram .image-slide-description {
  display: none !important;
}
</style>





<style id="footer-color-combination">
/* =========================================
   FOOTER COLOR COMBINATION
   ========================================= */

/* 1. Main Footer Background -> Crimson */
footer#footer-sections .section-background {
  background-color: #791112 !important;
}

/* 2. All Text -> White */
footer#footer-sections * {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}

/* Fix images (like the logo) from turning white */
footer#footer-sections img,
footer#footer-sections .sqs-image-content {
  -webkit-text-fill-color: initial !important;
}

/* 3. Social Icons -> White, Hover Gold */
footer#footer-sections .sqs-svg-icon--wrapper use.sqs-use--icon {
  fill: #ffffff !important;
}
footer#footer-sections .sqs-svg-icon--wrapper:hover use.sqs-use--icon {
  fill: #b48c5b !important;
}

/* 4. Bottom Bar (Tags Area) -> Gold/Tan */
/* We create a fake bottom bar using a pseudo-element on the footer */
footer#footer-sections {
  position: relative;
}

footer#footer-sections .content-wrapper {
  position: relative;
  z-index: 1; /* Keep text above the gold bar */
}

/* Adjust the Tags text to fit cleanly inside the thinner gold bar */
.fe-block-yui_3_17_2_1_1661237561528_110064 p {
  font-size: 0.75rem !important;
  line-height: 1.2 !important;
  margin-top: 15px !important;
  margin-bottom: 0 !important;
}

@media screen and (max-width: 767px) {
  
}
</style>























<style id="footer-copyright-alignment">
/* =========================================
   PROPER HTML BOTTOM BAR
   ========================================= */

/* Hide the old floating copyright text blocks */
.fe-block-5b0cb61a7f09afea4a1a,
.fe-block-yui_3_17_2_1_1661237561528_110064 {
  display: none !important;
}

footer#footer-sections {
  position: relative;
  padding-bottom: 50px !important; 
}

/* The new injected HTML bottom bar */
.custom-bottom-bar {
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 50px !important;
  background-color: #b48c5b !important; /* Gold */
  z-index: 10 !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0 5% !important;
  box-sizing: border-box !important;
}

.custom-bottom-bar, .custom-bottom-bar a {
  color: #fffeff !important;
  -webkit-text-fill-color: #fffeff !important;
  font-size: 1.05rem !important;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  letter-spacing: 0.03em !important;
  text-decoration: none !important;
}

.custom-bottom-bar a:hover {
  opacity: 0.8 !important;
}

/* Mobile responsiveness */
@media screen and (max-width: 767px) {
  footer#footer-sections {
    padding-bottom: 80px !important;
  }
  .custom-bottom-bar {
    height: 80px !important;
    flex-direction: column !important;
    justify-content: center !important;
    gap: 5px !important;
    text-align: center !important;
  }
  .custom-bottom-bar, .custom-bottom-bar a {
    font-size: 0.85rem !important;
  }
}

.custom-bottom-bar, .custom-bottom-bar * {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  font-weight: 300 !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  letter-spacing: normal !important;
  text-decoration: none !important;
}
.custom-bottom-bar a:hover {
  text-decoration: underline !important;
}
</style>








<style id="footer-logo-center-scale">
/* =========================================
   FOOTER LOGO CENTERING AND SCALING
   ========================================= */

/* 1. Safely center the logo by shifting its CSS grid coordinates exactly 1 column to the left */
@media (min-width: 768px) {
  footer#footer-sections .fe-block-630485c6f6a40b8b351bf88a {
    grid-area: 1/9/6/17 !important; /* Perfect mathematical center for an 8-column block in a 24-column grid */
  }
}

/* 2. Scale the logo up to make it prominent ("bada karo") */
footer#footer-sections .fe-block-630485c6f6a40b8b351bf88a .sqs-block-image {
  transform: scale(1.6) !important; /* Scaled up significantly */
  transform-origin: center center !important;
}

/* 3. Mobile adjustments */
@media screen and (max-width: 767px) {
  footer#footer-sections .fe-block-630485c6f6a40b8b351bf88a .sqs-block-image {
    transform: scale(1.3) !important;
  }
}
</style>


<style id="custom-footer-override">
/* =========================================
   CUSTOM 3-COLUMN FOOTER LAYOUT
   ========================================= */

/* 1. Hide the default Squarespace footer sections and old hacks */
footer#footer-sections .page-section {
  display: none !important;
}


/* 2. Brand new flexbox footer */
.thecinewale-custom-footer {
  background-color: #791112 !important;
  color: #fffeff !important;
  -webkit-text-fill-color: #fffeff !important;
  padding: 60px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-family: var(--font-body);
  gap: 30px;
}

.tcf-col {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}



.thecinewale-custom-footer * {
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  opacity: 1 !important;
  font-weight: 500 !important;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  letter-spacing: normal !important;
}
.thecinewale-custom-footer h4 {
  font-weight: bold !important;
  font-size: 1rem !important;
  letter-spacing: 0.05em !important;
}
.tcf-col-right .tags {
  opacity: 1 !important;
}
.tcf-col-right a {
  text-decoration: none !important;
}


.thecinewale-custom-footer input {
  color: #8c7b6c !important;
  -webkit-text-fill-color: #8c7b6c !important;
}
.thecinewale-custom-footer input::placeholder {
  color: #8c7b6c !important;
  -webkit-text-fill-color: #8c7b6c !important;
  opacity: 0.8 !important;
}

/* LEFT COLUMN */
.tcf-col-left {
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.8;
}

.tcf-col-left h4 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  color: #fffeff !important;
  -webkit-text-fill-color: #fffeff !important;
  font-family: var(--font-body);
}

/* MIDDLE COLUMN */
.tcf-col-center {
  text-align: center;
  flex: 1.2;
}

.tcf-col-center img {
  max-width: 90%;
  margin-bottom: 25px;
  display: inline-block;
}

.tcf-socials {
  display: flex;
  justify-content: center;
  gap: 22px;
}

.tcf-socials a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fffeff;
  border-radius: 50%;
  color: #791112 !important;
  -webkit-text-fill-color: #791112 !important;
  text-decoration: none;
  font-size: 1.2rem;
  transition: opacity 0.3s ease;
}

.tcf-socials a:hover {
  opacity: 0.8;
}

.tcf-socials a svg {
  width: 34px;
  height: 34px;
  fill: #791112 !important;
}

/* RIGHT COLUMN */
.tcf-col-right {
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.8;
}

.tcf-col-right .tags {
  margin-top: 25px;
  margin-bottom: 30px;
  opacity: 0.9;
}

.tcf-col-right .copyright {
  font-size: 0.85rem;
}

.tcf-col-right a {
  color: #fffeff !important;
  -webkit-text-fill-color: #fffeff !important;
  text-decoration: none;
}
.tcf-col-right a:hover {
  text-decoration: underline;
}

/* MOBILE RESPONSIVENESS */
@media (max-width: 900px) {
  .thecinewale-custom-footer {
    flex-direction: column;
    padding: 60px 20px;
    gap: 60px;
  }
  .tcf-col-center {
    order: -1; /* Logo on top for mobile */
  }
}
</style>











<!-- MOBILE LOGO AND BURGER FIX -->
<style id="mobile-logo-burger-fix">
@media screen and (max-width: 767px) {
  /* Enlarge mobile logo - adjusted to 1.3 as requested */
  #header .header-title-logo img,
  #header .header-title-logo a {
    max-height: 50px !important;
    transform: scale(1.3) !important;
    transform-origin: left center !important;
  }
  
  /* Remove burger background color */
  .header-burger-btn,
  .burger-box,
  .header-burger {
    background-color: transparent !important;
    background: transparent !important;
  }
  
  /* Enlarge mobile menu items */
  .header-menu-nav-item a,
  .header-menu-nav-item-content {
    font-size: 20px !important;
    letter-spacing: 2px !important;
    margin-bottom: 8px !important;
  }
}

</style>

</head>

  <body
    id="collection-67b2dc234cd7762cdddd6f58"
    class="
      tweak-blog-alternating-side-by-side-width-inset tweak-blog-alternating-side-by-side-image-aspect-ratio-11-square tweak-blog-alternating-side-by-side-text-alignment-left tweak-blog-alternating-side-by-side-read-more-style-show tweak-blog-alternating-side-by-side-image-text-alignment-middle tweak-blog-alternating-side-by-side-delimiter-bullet tweak-blog-alternating-side-by-side-meta-position-top tweak-blog-alternating-side-by-side-primary-meta-categories tweak-blog-alternating-side-by-side-secondary-meta-date tweak-blog-alternating-side-by-side-excerpt-show image-block-poster-text-alignment-center image-block-card-content-position-center image-block-card-text-alignment-left image-block-overlap-content-position-center image-block-overlap-text-alignment-left image-block-collage-content-position-top image-block-collage-text-alignment-left image-block-stack-text-alignment-left form-use-theme-colors form-field-style-solid form-field-shape-square form-field-border-all form-field-checkbox-type-icon form-field-checkbox-fill-solid form-field-checkbox-color-inverted form-field-checkbox-shape-square form-field-checkbox-layout-stack form-field-radio-type-icon form-field-radio-fill-solid form-field-radio-color-normal form-field-radio-shape-pill form-field-radio-layout-stack form-field-survey-fill-solid form-field-survey-color-normal form-field-survey-shape-pill form-field-hover-focus-outline form-submit-button-style-label tweak-global-animations-enabled tweak-global-animations-complexity-level-detailed tweak-global-animations-animation-style-fade tweak-global-animations-animation-type-fade tweak-global-animations-animation-curve-ease tweak-blog-masonry-width-full tweak-blog-masonry-text-alignment-center tweak-blog-masonry-primary-meta-none tweak-blog-masonry-secondary-meta-none tweak-blog-masonry-meta-position-top tweak-blog-masonry-read-more-style-show tweak-blog-masonry-delimiter-bullet tweak-blog-masonry-image-placement-above tweak-blog-masonry-excerpt-show tweak-portfolio-grid-overlay-width-full tweak-portfolio-grid-overlay-height-small tweak-portfolio-grid-overlay-image-aspect-ratio-43-four-three tweak-portfolio-grid-overlay-text-placement-center tweak-portfolio-grid-overlay-show-text-after-hover tweak-blog-single-column-width-inset tweak-blog-single-column-text-alignment-center tweak-blog-single-column-image-placement-above tweak-blog-single-column-delimiter-bullet tweak-blog-single-column-read-more-style-show tweak-blog-single-column-primary-meta-categories tweak-blog-single-column-secondary-meta-date tweak-blog-single-column-meta-position-top tweak-blog-single-column-content-excerpt-and-title header-width-inset tweak-transparent-header  tweak-fixed-header-style-scroll-back tweak-blog-item-width-medium tweak-blog-item-text-alignment-center tweak-blog-item-meta-position-above-title tweak-blog-item-show-categories    tweak-blog-item-delimiter-dash tweak-blog-side-by-side-width-inset tweak-blog-side-by-side-image-placement-left tweak-blog-side-by-side-image-aspect-ratio-11-square tweak-blog-side-by-side-primary-meta-categories tweak-blog-side-by-side-secondary-meta-date tweak-blog-side-by-side-meta-position-top tweak-blog-side-by-side-text-alignment-left tweak-blog-side-by-side-image-text-alignment-middle tweak-blog-side-by-side-read-more-style-show tweak-blog-side-by-side-delimiter-bullet tweak-blog-side-by-side-excerpt-show primary-button-style-outline primary-button-shape-square secondary-button-style-outline secondary-button-shape-square tertiary-button-style-outline tertiary-button-shape-square tweak-events-stacked-width-inset tweak-events-stacked-height-small tweak-events-stacked-show-past-events tweak-events-stacked-show-thumbnails tweak-events-stacked-thumbnail-size-32-standard tweak-events-stacked-date-style-side-tag tweak-events-stacked-show-time tweak-events-stacked-show-location tweak-events-stacked-ical-gcal-links tweak-events-stacked-show-excerpt  tweak-blog-basic-grid-width-inset tweak-blog-basic-grid-image-aspect-ratio-32-standard tweak-blog-basic-grid-text-alignment-center tweak-blog-basic-grid-delimiter-bullet tweak-blog-basic-grid-image-placement-above tweak-blog-basic-grid-read-more-style-show tweak-blog-basic-grid-primary-meta-categories tweak-blog-basic-grid-secondary-meta-date tweak-blog-basic-grid-excerpt-show tweak-portfolio-grid-basic-width-inset tweak-portfolio-grid-basic-height-medium tweak-portfolio-grid-basic-image-aspect-ratio-43-four-three tweak-portfolio-grid-basic-text-alignment-left tweak-portfolio-grid-basic-hover-effect-zoom header-overlay-alignment-right tweak-portfolio-index-background-link-format-stacked tweak-portfolio-index-background-width-full-bleed tweak-portfolio-index-background-height-large  tweak-portfolio-index-background-vertical-alignment-middle tweak-portfolio-index-background-horizontal-alignment-center tweak-portfolio-index-background-delimiter-none tweak-portfolio-index-background-animation-type-fade tweak-portfolio-index-background-animation-duration-medium tweak-portfolio-hover-follow-layout-inline  tweak-portfolio-hover-follow-delimiter-forward-slash tweak-portfolio-hover-follow-animation-type-fade tweak-portfolio-hover-follow-animation-duration-medium tweak-portfolio-hover-static-layout-stacked  tweak-portfolio-hover-static-delimiter-forward-slash tweak-portfolio-hover-static-animation-type-scale-up tweak-portfolio-hover-static-animation-duration-medium hide-opentable-icons opentable-style-dark tweak-product-quick-view-button-style-floating tweak-product-quick-view-button-position-bottom tweak-product-quick-view-lightbox-excerpt-display-truncate tweak-product-quick-view-lightbox-show-arrows tweak-product-quick-view-lightbox-show-close-button tweak-product-quick-view-lightbox-controls-weight-light native-currency-code-inr collection-67b2dc234cd7762cdddd6f58 collection-type-page collection-layout-default mobile-style-available sqs-seven-one
      
        
          
        
      
    "
    tabindex="-1"
  >
    <div
      id="siteWrapper"
      class="clearfix site-wrapper"
    >
      
        <div id="floatingCart" class="floating-cart hidden">
          <a href="/cart" class="icon icon--stroke icon--fill icon--cart sqs-custom-cart">
            <span class="Cart-inner">
              



  <svg class="icon icon--cart" viewBox="0 0 31 24">
  <g class="svg-icon cart-icon--odd">
    <circle fill="none" stroke-miterlimit="10" cx="22.5" cy="21.5" r="1"/>
    <circle fill="none" stroke-miterlimit="10" cx="9.5" cy="21.5" r="1"/>
    <path fill="none" stroke-miterlimit="10" d="M0,1.5h5c0.6,0,1.1,0.4,1.1,1l1.7,13
      c0.1,0.5,0.6,1,1.1,1h15c0.5,0,1.2-0.4,1.4-0.9l3.3-8.1c0.2-0.5-0.1-0.9-0.6-0.9H12"/>
  </g>
</svg>

              <div class="legacy-cart icon-cart-quantity">
                <span class="sqs-cart-quantity">0</span>
              </div>
            </span>
          </a>
        </div>
      

      












  <header
    data-test="header"
    id="header"
    
    class="
      
        
          black
        
      
      header theme-col--primary
    "
    data-section-theme="black"
    data-controller="Header"
    data-current-styles="{
&quot;layout&quot;: &quot;navRight&quot;,
&quot;action&quot;: {
&quot;href&quot;: &quot;/rsvp&quot;,
&quot;buttonText&quot;: &quot;RSVP&quot;,
&quot;newWindow&quot;: false
},
&quot;showSocial&quot;: false,
&quot;socialOptions&quot;: {
&quot;socialBorderShape&quot;: &quot;none&quot;,
&quot;socialBorderStyle&quot;: &quot;outline&quot;,
&quot;socialBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;menuOverlayTheme&quot;: &quot;bright&quot;,
&quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
&quot;cartStyle&quot;: &quot;cart&quot;,
&quot;cartText&quot;: &quot;Cart&quot;,
&quot;showEmptyCartState&quot;: true,
&quot;cartOptions&quot;: {
&quot;iconType&quot;: &quot;stroke-1&quot;,
&quot;cartBorderShape&quot;: &quot;none&quot;,
&quot;cartBorderStyle&quot;: &quot;outline&quot;,
&quot;cartBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;showButton&quot;: false,
&quot;showCart&quot;: false,
&quot;showAccountLogin&quot;: true,
&quot;headerStyle&quot;: &quot;dynamic&quot;,
&quot;languagePicker&quot;: {
&quot;enabled&quot;: false,
&quot;iconEnabled&quot;: false,
&quot;iconType&quot;: &quot;globe&quot;,
&quot;flagShape&quot;: &quot;shiny&quot;,
&quot;languageFlags&quot;: [ ]
},
&quot;iconOptions&quot;: {
&quot;desktopDropdownIconOptions&quot;: {
&quot;endcapType&quot;: &quot;square&quot;,
&quot;folderDropdownIcon&quot;: &quot;none&quot;,
&quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
},
&quot;mobileDropdownIconOptions&quot;: {
&quot;endcapType&quot;: &quot;square&quot;,
&quot;folderDropdownIcon&quot;: &quot;openArrowHead&quot;,
&quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
}
},
&quot;mobileOptions&quot;: {
&quot;layout&quot;: &quot;logoLeftNavRight&quot;,
&quot;menuIconOptions&quot;: {
&quot;style&quot;: &quot;tripleLineHamburger&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 2.0
}
}
},
&quot;solidOptions&quot;: {
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;CUSTOM_COLOR&quot;,
&quot;customColor&quot;: {
&quot;hslaValue&quot;: {
&quot;hue&quot;: 0.0,
&quot;saturation&quot;: 0.0,
&quot;lightness&quot;: 1.0,
&quot;alpha&quot;: 1.0
},
&quot;userFormat&quot;: &quot;hex&quot;
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;CUSTOM_COLOR&quot;,
&quot;customColor&quot;: {
&quot;hslaValue&quot;: {
&quot;hue&quot;: 0.0,
&quot;saturation&quot;: 0.0,
&quot;lightness&quot;: 0.0,
&quot;alpha&quot;: 1.0
},
&quot;userFormat&quot;: &quot;hex&quot;
}
}
},
&quot;gradientOptions&quot;: {
&quot;gradientType&quot;: &quot;faded&quot;,
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 90.0
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;CUSTOM_COLOR&quot;,
&quot;customColor&quot;: {
&quot;hslaValue&quot;: {
&quot;hue&quot;: 0.0,
&quot;saturation&quot;: 0.0,
&quot;lightness&quot;: 1.0,
&quot;alpha&quot;: 1.0
},
&quot;userFormat&quot;: &quot;hex&quot;
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;CUSTOM_COLOR&quot;,
&quot;customColor&quot;: {
&quot;hslaValue&quot;: {
&quot;hue&quot;: 0.0,
&quot;saturation&quot;: 0.0,
&quot;lightness&quot;: 0.0,
&quot;alpha&quot;: 1.0
},
&quot;userFormat&quot;: &quot;hex&quot;
}
}
},
&quot;dropShadowOptions&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;borderOptions&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 0.02
}
}
},
&quot;showPromotedElement&quot;: false,
&quot;buttonVariant&quot;: &quot;primary&quot;,
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
}
}"
    data-section-id="header"
    data-header-style="dynamic"
    data-language-picker="{
&quot;enabled&quot;: false,
&quot;iconEnabled&quot;: false,
&quot;iconType&quot;: &quot;globe&quot;,
&quot;flagShape&quot;: &quot;shiny&quot;,
&quot;languageFlags&quot;: [ ]
}"
    
    
    data-first-focusable-element
    tabindex="-1"
    style="
      
      
        --headerBorderColor: hsla(var(--black-hsl), 0.02);
      
      
        --solidHeaderBackgroundColor: hsla(0, 0%, 100%, 1);
      
      
        --solidHeaderNavigationColor: hsla(0, 0%, 0%, 1);
      
      
        --gradientHeaderBackgroundColor: hsla(0, 0%, 100%, 1);
      
      
        --gradientHeaderNavigationColor: hsla(0, 0%, 0%, 1);
      
    "
  >
    <svg  style="display:none" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
  <symbol id="circle" >
    <path d="M11.5 17C14.5376 17 17 14.5376 17 11.5C17 8.46243 14.5376 6 11.5 6C8.46243 6 6 8.46243 6 11.5C6 14.5376 8.46243 17 11.5 17Z" fill="none" />
  </symbol>

  <symbol id="circleFilled" >
    <path d="M11.5 17C14.5376 17 17 14.5376 17 11.5C17 8.46243 14.5376 6 11.5 6C8.46243 6 6 8.46243 6 11.5C6 14.5376 8.46243 17 11.5 17Z" />
  </symbol>

  <symbol id="dash" >
    <path d="M11 11H19H3" />
  </symbol>

  <symbol id="squareFilled" >
    <rect x="6" y="6" width="11" height="11" />
  </symbol>

  <symbol id="square" >
    <rect x="7" y="7" width="9" height="9" fill="none" stroke="inherit" />
  </symbol>
  
  <symbol id="plus" >
    <path d="M11 3V19" />
    <path d="M19 11L3 11"/>
  </symbol>
  
  <symbol id="closedArrow" >
    <path d="M11 11V2M11 18.1797L17 11.1477L5 11.1477L11 18.1797Z" fill="none" />
  </symbol>
  
  <symbol id="closedArrowFilled" >
    <path d="M11 11L11 2" stroke="inherit" fill="none"  />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.74695 9.38428L19.038 9.38428L10.8925 19.0846L2.74695 9.38428Z" stroke-width="1" />
  </symbol>
  
  <symbol id="closedArrowHead" viewBox="0 0 22 22"  xmlns="http://www.w3.org/2000/symbol">
    <path d="M18 7L11 15L4 7L18 7Z" fill="none" stroke="inherit" />
  </symbol>
  
  
  <symbol id="closedArrowHeadFilled" viewBox="0 0 22 22"  xmlns="http://www.w3.org/2000/symbol">
    <path d="M18.875 6.5L11 15.5L3.125 6.5L18.875 6.5Z" />
  </symbol>
  
  <symbol id="openArrow" >
    <path d="M11 18.3591L11 3" stroke="inherit" fill="none"  />
    <path d="M18 11.5L11 18.5L4 11.5" stroke="inherit" fill="none"  />
  </symbol>
  
  <symbol id="openArrowHead" >
    <path d="M18 7L11 14L4 7" fill="none" />
  </symbol>

  <symbol id="pinchedArrow" >
    <path d="M11 17.3591L11 2" fill="none" />
    <path d="M2 11C5.85455 12.2308 8.81818 14.9038 11 18C13.1818 14.8269 16.1455 12.1538 20 11" fill="none" />
  </symbol>

  <symbol id="pinchedArrowFilled" >
    <path d="M11.05 10.4894C7.04096 8.73759 1.05005 8 1.05005 8C6.20459 11.3191 9.41368 14.1773 11.05 21C12.6864 14.0851 15.8955 11.227 21.05 8C21.05 8 15.0591 8.73759 11.05 10.4894Z" stroke-width="1"/>
    <path d="M11 11L11 1" fill="none"/>
  </symbol>

  <symbol id="pinchedArrowHead" >
    <path d="M2 7.24091C5.85455 8.40454 8.81818 10.9318 11 13.8591C13.1818 10.8591 16.1455 8.33181 20 7.24091"  fill="none" />
  </symbol>
  
  <symbol id="pinchedArrowHeadFilled" >
    <path d="M11.05 7.1591C7.04096 5.60456 1.05005 4.95001 1.05005 4.95001C6.20459 7.89547 9.41368 10.4318 11.05 16.4864C12.6864 10.35 15.8955 7.81365 21.05 4.95001C21.05 4.95001 15.0591 5.60456 11.05 7.1591Z" />
  </symbol>

</svg>
    
<div class="sqs-announcement-bar-dropzone"></div>

    <div class="header-announcement-bar-wrapper">
      
      <a
        href="#page"
        class="header-skip-link sqs-button-element--primary"
      >
        Skip to Content
      </a>
      


<style>
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        .header-blur-background {
            
            
        }
    }

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
      <div
        class="header-border"
        data-header-style="dynamic"
        data-header-border="false"
        data-test="header-border"
        style="




"
      ></div>
      <div
        class="header-dropshadow"
        data-header-style="dynamic"
        data-header-dropshadow="false"
        data-test="header-dropshadow"
        style=""
      ></div>
      
      

      <div class='header-inner container--fluid
        
        
        
         header-mobile-layout-logo-left-nav-right
        
        
        
        
        
        
         header-layout-nav-right
        
        
        
        
        
        
        
        
        '
        data-test="header-inner"
        >
        <!-- Background -->
        <div class="header-background theme-bg--primary"></div>

        <div class="header-display-desktop" data-content-field="site-title">
          

          

          

          

          

          
          
            
            <!-- Social -->
            
          
            
            <!-- Title and nav wrapper -->
            <div class="header-title-nav-wrapper">
              

              

              
                
                <!-- Title -->
                
                  <div
                    class="
                      header-title
                      
                    "
                    data-animation-role="header-element"
                  >
                    
                      <div class="header-title-logo">
                        <a href="/" data-animation-role="header-element"><img src="https://res.cloudinary.com/nmv4tzev/image/upload/f_auto,q_auto/v1787760762/uuxscuaciavioalk7gyc.png" alt="The Cinewale" class="site-branding-logo" ></a>
                      </div>

                    
                    
                  </div>
                
              
                
                <!-- Nav -->
                <div class="header-nav">
                  <div class="header-nav-wrapper">
                    <nav class="header-nav-list">
                      


  
    <div class="header-nav-item header-nav-item--collection header-nav-item--homepage">
      <a
        href="/"
        data-animation-role="header-element"
        
      >
        HOME 
      </a>
    </div>
  
  
  


  
    <div class="header-nav-item header-nav-item--collection">
      <a
        href="/photography"
        data-animation-role="header-element"
        
      >
        BLOGS
      </a>
    </div>
  
  
  


  
    <div class="header-nav-item header-nav-item--collection">
      <a
        href="/films"
        data-animation-role="header-element"
        
      >
        FILMS
      </a>
    </div>
  
  
  


  
    <div class="header-nav-item header-nav-item--collection">
      <a
        href="/faq"
        data-animation-role="header-element"
        
      >
        FAQ
      </a>
    </div>
  
  
  


  
    <div class="header-nav-item header-nav-item--collection">
      <a
        href="/contact"
        data-animation-role="header-element"
        
      >
        CONTACT
      </a>
    </div>
  
  
  



                    </nav>
                  </div>
                </div>
              
              
            </div>
          
            
            <!-- Actions -->
            <div class="header-actions header-actions--right">
              
              

              

            
            

              
              <div class="showOnMobile">
                
              </div>

              
              <div class="showOnDesktop">
                
              </div>

              
            </div>
          
            


<style>
  .top-bun, 
  .patty, 
  .bottom-bun {
    height: 2px;
  }

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<!-- Burger -->
<div class="header-burger

  menu-overlay-has-visible-non-navigation-items


  
  no-actions
  
" data-animation-role="header-element">
  <button class="header-burger-btn burger" data-test="header-burger">
    <span hidden class="js-header-burger-open-title visually-hidden">Open Menu</span>
    <span hidden class="js-header-burger-close-title visually-hidden">Close Menu</span>
    <div class="burger-box">
      <div class="burger-inner header-menu-icon-tripleLineHamburger">
        <div class="top-bun"></div>
        <div class="patty"></div>
        <div class="bottom-bun"></div>
      </div>
    </div>
  </button>
</div>

          

        </div>
        <div class="header-display-mobile" data-content-field="site-title">
          
            
            <!-- Social -->
            
          
            
            <!-- Title and nav wrapper -->
            <div class="header-title-nav-wrapper">
              

              

              
                
                <!-- Title -->
                
                  <div
                    class="
                      header-title
                      
                    "
                    data-animation-role="header-element"
                  >
                    
                      <div class="header-title-logo">
                        <a href="/" data-animation-role="header-element"><img src="https://res.cloudinary.com/nmv4tzev/image/upload/f_auto,q_auto/v1787760762/uuxscuaciavioalk7gyc.png" alt="The Cinewale" class="site-branding-logo" ></a>
                      </div>

                    
                    
                  </div>
                
              
                
                <!-- Nav -->
                <div class="header-nav">
                  <div class="header-nav-wrapper">
                    <nav class="header-nav-list">
                      


  
    <div class="header-nav-item header-nav-item--collection header-nav-item--homepage">
      <a
        href="/"
        data-animation-role="header-element"
        
      >
        HOME 
      </a>
    </div>
  
  
  


  
    <div class="header-nav-item header-nav-item--collection">
      <a
        href="/photography"
        data-animation-role="header-element"
        
      >
        BLOGS
      </a>
    </div>
  
  
  


  
    <div class="header-nav-item header-nav-item--collection">
      <a
        href="/films"
        data-animation-role="header-element"
        
      >
        FILMS
      </a>
    </div>
  
  
  


  
    <div class="header-nav-item header-nav-item--collection">
      <a
        href="/faq"
        data-animation-role="header-element"
        
      >
        FAQ
      </a>
    </div>
  
  
  


  
    <div class="header-nav-item header-nav-item--collection">
      <a
        href="/contact"
        data-animation-role="header-element"
        
      >
        CONTACT
      </a>
    </div>
  
  
  



                    </nav>
                  </div>
                </div>
              
              
            </div>
          
            
            <!-- Actions -->
            <div class="header-actions header-actions--right">
              
              

              

            
            

              
              <div class="showOnMobile">
                
              </div>

              
              <div class="showOnDesktop">
                
              </div>

              
            </div>
          
            


<style>
  .top-bun, 
  .patty, 
  .bottom-bun {
    height: 2px;
  }

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<!-- Burger -->
<div class="header-burger

  menu-overlay-has-visible-non-navigation-items


  
  no-actions
  
" data-animation-role="header-element">
  <button class="header-burger-btn burger" data-test="header-burger">
    <span hidden class="js-header-burger-open-title visually-hidden">Open Menu</span>
    <span hidden class="js-header-burger-close-title visually-hidden">Close Menu</span>
    <div class="burger-box">
      <div class="burger-inner header-menu-icon-tripleLineHamburger">
        <div class="top-bun"></div>
        <div class="patty"></div>
        <div class="bottom-bun"></div>
      </div>
    </div>
  </button>
</div>

          
          
          
          
          
        </div>
      </div>
    </div>
    <!-- (Mobile) Menu Navigation -->
    <div class="header-menu header-menu--folder-list
      bright
      
      
      
      
      "
      data-section-theme="bright"
      data-current-styles="{
&quot;layout&quot;: &quot;navRight&quot;,
&quot;action&quot;: {
&quot;href&quot;: &quot;/rsvp&quot;,
&quot;buttonText&quot;: &quot;RSVP&quot;,
&quot;newWindow&quot;: false
},
&quot;showSocial&quot;: false,
&quot;socialOptions&quot;: {
&quot;socialBorderShape&quot;: &quot;none&quot;,
&quot;socialBorderStyle&quot;: &quot;outline&quot;,
&quot;socialBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;menuOverlayTheme&quot;: &quot;bright&quot;,
&quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
&quot;cartStyle&quot;: &quot;cart&quot;,
&quot;cartText&quot;: &quot;Cart&quot;,
&quot;showEmptyCartState&quot;: true,
&quot;cartOptions&quot;: {
&quot;iconType&quot;: &quot;stroke-1&quot;,
&quot;cartBorderShape&quot;: &quot;none&quot;,
&quot;cartBorderStyle&quot;: &quot;outline&quot;,
&quot;cartBorderThickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 1.0
}
},
&quot;showButton&quot;: false,
&quot;showCart&quot;: false,
&quot;showAccountLogin&quot;: true,
&quot;headerStyle&quot;: &quot;dynamic&quot;,
&quot;languagePicker&quot;: {
&quot;enabled&quot;: false,
&quot;iconEnabled&quot;: false,
&quot;iconType&quot;: &quot;globe&quot;,
&quot;flagShape&quot;: &quot;shiny&quot;,
&quot;languageFlags&quot;: [ ]
},
&quot;iconOptions&quot;: {
&quot;desktopDropdownIconOptions&quot;: {
&quot;endcapType&quot;: &quot;square&quot;,
&quot;folderDropdownIcon&quot;: &quot;none&quot;,
&quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
},
&quot;mobileDropdownIconOptions&quot;: {
&quot;endcapType&quot;: &quot;square&quot;,
&quot;folderDropdownIcon&quot;: &quot;openArrowHead&quot;,
&quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
}
},
&quot;mobileOptions&quot;: {
&quot;layout&quot;: &quot;logoLeftNavRight&quot;,
&quot;menuIconOptions&quot;: {
&quot;style&quot;: &quot;tripleLineHamburger&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 2.0
}
}
},
&quot;solidOptions&quot;: {
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;CUSTOM_COLOR&quot;,
&quot;customColor&quot;: {
&quot;hslaValue&quot;: {
&quot;hue&quot;: 0.0,
&quot;saturation&quot;: 0.0,
&quot;lightness&quot;: 1.0,
&quot;alpha&quot;: 1.0
},
&quot;userFormat&quot;: &quot;hex&quot;
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;CUSTOM_COLOR&quot;,
&quot;customColor&quot;: {
&quot;hslaValue&quot;: {
&quot;hue&quot;: 0.0,
&quot;saturation&quot;: 0.0,
&quot;lightness&quot;: 0.0,
&quot;alpha&quot;: 1.0
},
&quot;userFormat&quot;: &quot;hex&quot;
}
}
},
&quot;gradientOptions&quot;: {
&quot;gradientType&quot;: &quot;faded&quot;,
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 90.0
},
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;backgroundColor&quot;: {
&quot;type&quot;: &quot;CUSTOM_COLOR&quot;,
&quot;customColor&quot;: {
&quot;hslaValue&quot;: {
&quot;hue&quot;: 0.0,
&quot;saturation&quot;: 0.0,
&quot;lightness&quot;: 1.0,
&quot;alpha&quot;: 1.0
},
&quot;userFormat&quot;: &quot;hex&quot;
}
},
&quot;navigationColor&quot;: {
&quot;type&quot;: &quot;CUSTOM_COLOR&quot;,
&quot;customColor&quot;: {
&quot;hslaValue&quot;: {
&quot;hue&quot;: 0.0,
&quot;saturation&quot;: 0.0,
&quot;lightness&quot;: 0.0,
&quot;alpha&quot;: 1.0
},
&quot;userFormat&quot;: &quot;hex&quot;
}
}
},
&quot;dropShadowOptions&quot;: {
&quot;enabled&quot;: false,
&quot;blur&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
},
&quot;spread&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 0.0
},
&quot;distance&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;borderOptions&quot;: {
&quot;enabled&quot;: false,
&quot;position&quot;: &quot;allSides&quot;,
&quot;thickness&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 4.0
},
&quot;color&quot;: {
&quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
&quot;sitePaletteColor&quot;: {
&quot;colorName&quot;: &quot;black&quot;,
&quot;alphaModifier&quot;: 0.02
}
}
},
&quot;showPromotedElement&quot;: false,
&quot;buttonVariant&quot;: &quot;primary&quot;,
&quot;blurBackground&quot;: {
&quot;enabled&quot;: false,
&quot;blurRadius&quot;: {
&quot;unit&quot;: &quot;px&quot;,
&quot;value&quot;: 12.0
}
},
&quot;headerOpacity&quot;: {
&quot;unit&quot;: &quot;%&quot;,
&quot;value&quot;: 100.0
}
}"
      data-section-id="overlay-nav"
      data-show-account-login="true"
      data-test="header-menu">
      <div class="header-menu-bg theme-bg--primary"></div>
      <div class="header-menu-nav">
        <nav class="header-menu-nav-list">
          <div data-folder="root" class="header-menu-nav-folder">
            <div class="header-menu-nav-folder-content">
              <!-- Menu Navigation -->
<div class="header-menu-nav-wrapper">
  
    
      
        
          
            <div class="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--homepage">
              <a
                href="/"
                
              >
                <div class="header-menu-nav-item-content">
                  HOME 
                </div>
              </a>
            </div>
          
        
      
    
      
        
          
            <div class="container header-menu-nav-item header-menu-nav-item--collection">
              <a
                href="/photography"
                
              >
                <div class="header-menu-nav-item-content">
                  BLOGS
                </div>
              </a>
            </div>
          
        
      
    
      
        
          
            <div class="container header-menu-nav-item header-menu-nav-item--collection">
              <a
                href="/films"
                
              >
                <div class="header-menu-nav-item-content">
                  FILMS
                </div>
              </a>
            </div>
          
        
      
    
      
        
          
            <div class="container header-menu-nav-item header-menu-nav-item--collection">
              <a
                href="/faq"
                
              >
                <div class="header-menu-nav-item-content">
                  FAQ
                </div>
              </a>
            </div>
          
        
      
    
      
        
          
            <div class="container header-menu-nav-item header-menu-nav-item--collection">
              <a
                href="/contact"
                
              >
                <div class="header-menu-nav-item-content">
                  CONTACT
                </div>
              </a>
            </div>
          
        
      
    
  
</div>

              
            </div>
            
            
            
          </div>
        </nav>
      </div>
    </div>
    
    <script>
      (function() {
        var header = document.getElementById('header');
        if (!header) {
          return;
        }
        function setHeaderHeightVar() {
          document.documentElement.style.setProperty(
            '--header-height',
            header.getBoundingClientRect().height + 'px'
          );
        }
        setHeaderHeightVar();
        var images = header.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
          if (!images[i].complete) {
            images[i].addEventListener('load', setHeaderHeightVar);
          }
        }
      })();
      //# sourceURL=reserveSpaceForHeader.js
    </script>
  </header>




      <main id="page" class="container" role="main">
        
          
            
<article class="sections" id="sections" data-page-sections="67b2dc234cd7762cdddd6f57">
  
  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme="black"
  class='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--large
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
       has-background
    
    
    black'
  
  data-section-id="67b2dc234cd7762cdddd6f5b"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;backgroundImage&quot;: {
&quot;id&quot;: &quot;67b303dffe714510a7a7b986&quot;,
&quot;recordType&quot;: 2,
&quot;addedOn&quot;: 1739785183543,
&quot;updatedOn&quot;: 1739785183605,
&quot;workflowState&quot;: 1,
&quot;publishOn&quot;: 1739785183543,
&quot;authorId&quot;: &quot;605b61dd2326317867eed357&quot;,
&quot;systemDataId&quot;: &quot;ff122d0c-c001-4a2c-aeec-e1730cf4dfca&quot;,
&quot;systemDataVariants&quot;: &quot;9387x6258,100w,300w,500w,750w,1000w,1500w,2500w&quot;,
&quot;systemDataSourceType&quot;: &quot;JPG&quot;,
&quot;filename&quot;: &quot;04 BRIDE GETTING READY-72 HIM08015.jpg&quot;,
&quot;mediaFocalPoint&quot;: {
&quot;x&quot;: 0.5,
&quot;y&quot;: 0.5,
&quot;source&quot;: 3
},
&quot;colorData&quot;: {
&quot;topLeftAverage&quot;: &quot;aca599&quot;,
&quot;topRightAverage&quot;: &quot;a0998d&quot;,
&quot;bottomLeftAverage&quot;: &quot;8e8a86&quot;,
&quot;bottomRightAverage&quot;: &quot;8b857f&quot;,
&quot;centerAverage&quot;: &quot;54534c&quot;,
&quot;suggestedBgColor&quot;: &quot;958f87&quot;
},
&quot;urlId&quot;: &quot;bxci7t7luiejkxh7fnprzmd78a81xo&quot;,
&quot;title&quot;: &quot;&quot;,
&quot;body&quot;: null,
&quot;likeCount&quot;: 0,
&quot;commentCount&quot;: 0,
&quot;publicCommentCount&quot;: 0,
&quot;commentState&quot;: 2,
&quot;unsaved&quot;: false,
&quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg&quot;,
&quot;contentType&quot;: &quot;image/jpeg&quot;,
&quot;items&quot;: [ ],
&quot;pushedServices&quot;: { },
&quot;pendingPushedServices&quot;: { },
&quot;originalSize&quot;: &quot;9387x6258&quot;,
&quot;recordTypeLabel&quot;: &quot;image&quot;
},
&quot;imageOverlayOpacity&quot;: 0.03,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--large&quot;,
&quot;customSectionHeight&quot;: 85,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;black&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  data-fluid-engine-section
   
  
    
  
  
  
  
  


  data-sqsp-section="fluid-engine"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
        
        
          





  



<img alt="" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=750w" data-image-dimensions="9387x6258" data-image-focal-point="0.5,0.5" alt="04 BRIDE GETTING READY-72 HIM08015.jpg" data-load="false" elementtiming="nbf-background" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=750w" width="9387" height="6258" alt="" sizes="(max-width: 799px) 200vw, 100vw" style="display:block;object-position: 50% 50%" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ff122d0c-c001-4a2c-aeec-e1730cf4dfca/04+BRIDE+GETTING+READY-72+HIM08015.jpg?format=2500w 2500w" fetchpriority="high" loading="eager" decoding="async" data-loader="sqs">




        
        <div class="section-background-overlay" style="opacity: 0.03;"></div>
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style>

.fe-67b2dc234cd7762cdddd6f5a {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(9,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-67b2dc234cd7762cdddd6f5a {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-67b2dc234cd7762cdddd6f5a {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(2,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-52b42d1fd2e9a1c82bea {
    grid-area: 1/2/9/10;
    z-index: 0;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-52b42d1fd2e9a1c82bea .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-52b42d1fd2e9a1c82bea .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-52b42d1fd2e9a1c82bea {
      grid-area: 1/6/3/26;
      z-index: 0;

      

      
    }

    .fe-block-52b42d1fd2e9a1c82bea .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-52b42d1fd2e9a1c82bea .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><div class="fluid-engine fe-67b2dc234cd7762cdddd6f5a"><div class="fe-block fe-block-52b42d1fd2e9a1c82bea"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="52b42d1fd2e9a1c82bea" id="block-52b42d1fd2e9a1c82bea"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><h1 style="white-space:pre-wrap;"><span class="sqsrte-text-color--white"><strong> A Love Story Woven in Royalty &amp; Devotion</strong></span></h1></div>


  
<style id="container-styles">#block-52b42d1fd2e9a1c82bea {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-52b42d1fd2e9a1c82bea .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-52b42d1fd2e9a1c82bea {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-52b42d1fd2e9a1c82bea {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-52b42d1fd2e9a1c82bea {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-52b42d1fd2e9a1c82bea {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-52b42d1fd2e9a1c82bea {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-52b42d1fd2e9a1c82bea .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div></div></div>
    </div>
  
  </div>
  
</section>

  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme=""
  class='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--medium
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '
  
  data-section-id="67b2dc234cd7762cdddd6f5e"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: null,
&quot;divider&quot;: null,
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  data-fluid-engine-section
   
  
  
  
  
  


  data-sqsp-section="fluid-engine"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style>

.fe-67b2dc234cd7762cdddd6f5d {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(56,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-67b2dc234cd7762cdddd6f5d {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-67b2dc234cd7762cdddd6f5d {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(83,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-f534b0de7f6ee2fd7556 {
    grid-area: 1/2/15/10;
    z-index: 0;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-f534b0de7f6ee2fd7556 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-f534b0de7f6ee2fd7556 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-f534b0de7f6ee2fd7556 {
      grid-area: 1/5/17/23;
      z-index: 0;

      

      
    }

    .fe-block-f534b0de7f6ee2fd7556 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-f534b0de7f6ee2fd7556 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-yui_3_17_2_1_1739772354422_40000 {
    grid-area: 15/2/21/10;
    z-index: 1;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-yui_3_17_2_1_1739772354422_40000 .sqs-block {
    justify-content: center;
  }

  .fe-block-yui_3_17_2_1_1739772354422_40000 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1739772354422_40000 {
      grid-area: 16/6/32/14;
      z-index: 1;

      
        
      

      
    }

    .fe-block-yui_3_17_2_1_1739772354422_40000 .sqs-block {
      justify-content: center;
    }

    .fe-block-yui_3_17_2_1_1739772354422_40000 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-d45ff0d971fbd942f5b2 {
    grid-area: 21/2/27/10;
    z-index: 2;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-d45ff0d971fbd942f5b2 .sqs-block {
    justify-content: center;
  }

  .fe-block-d45ff0d971fbd942f5b2 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-d45ff0d971fbd942f5b2 {
      grid-area: 30/1/50/14;
      z-index: 2;

      
        
      

      
    }

    .fe-block-d45ff0d971fbd942f5b2 .sqs-block {
      justify-content: center;
    }

    .fe-block-d45ff0d971fbd942f5b2 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-cfe16508c29a94992543 {
    grid-area: 27/2/33/10;
    z-index: 3;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-cfe16508c29a94992543 .sqs-block {
    justify-content: center;
  }

  .fe-block-cfe16508c29a94992543 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-cfe16508c29a94992543 {
      grid-area: 31/1/51/14;
      z-index: 3;

      
        
      

      
    }

    .fe-block-cfe16508c29a94992543 .sqs-block {
      justify-content: center;
    }

    .fe-block-cfe16508c29a94992543 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-2ddef2c638a4c316ddd7 {
    grid-area: 33/2/39/10;
    z-index: 2;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-2ddef2c638a4c316ddd7 .sqs-block {
    justify-content: center;
  }

  .fe-block-2ddef2c638a4c316ddd7 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-2ddef2c638a4c316ddd7 {
      grid-area: 16/14/32/22;
      z-index: 2;

      
        
      

      
    }

    .fe-block-2ddef2c638a4c316ddd7 .sqs-block {
      justify-content: center;
    }

    .fe-block-2ddef2c638a4c316ddd7 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-a7529a9dcfa840210f5b {
    grid-area: 39/2/45/10;
    z-index: 3;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-a7529a9dcfa840210f5b .sqs-block {
    justify-content: center;
  }

  .fe-block-a7529a9dcfa840210f5b .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-a7529a9dcfa840210f5b {
      grid-area: 35/14/47/27;
      z-index: 3;

      
        
      

      
    }

    .fe-block-a7529a9dcfa840210f5b .sqs-block {
      justify-content: center;
    }

    .fe-block-a7529a9dcfa840210f5b .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-bf8bd2676c9caa5a8a5d {
    grid-area: 45/2/51/10;
    z-index: 5;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-bf8bd2676c9caa5a8a5d .sqs-block {
    justify-content: center;
  }

  .fe-block-bf8bd2676c9caa5a8a5d .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-bf8bd2676c9caa5a8a5d {
      grid-area: 47/3/65/25;
      z-index: 5;

      
        
      

      
    }

    .fe-block-bf8bd2676c9caa5a8a5d .sqs-block {
      justify-content: center;
    }

    .fe-block-bf8bd2676c9caa5a8a5d .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-beb5e4ba29a54aef5b5d {
    grid-area: 51/2/57/10;
    z-index: 6;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-beb5e4ba29a54aef5b5d .sqs-block {
    justify-content: center;
  }

  .fe-block-beb5e4ba29a54aef5b5d .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-beb5e4ba29a54aef5b5d {
      grid-area: 66/3/84/25;
      z-index: 6;

      
        
      

      
    }

    .fe-block-beb5e4ba29a54aef5b5d .sqs-block {
      justify-content: center;
    }

    .fe-block-beb5e4ba29a54aef5b5d .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><div class="fluid-engine fe-67b2dc234cd7762cdddd6f5d"><div class="fe-block fe-block-f534b0de7f6ee2fd7556"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="f534b0de7f6ee2fd7556" id="block-f534b0de7f6ee2fd7556"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><h1 style="text-align:center;white-space:pre-wrap;"><span class="sqsrte-text-color--accent">Some love stories are written in the stars </span></h1><h1 style="text-align:center;white-space:pre-wrap;"><span class="sqsrte-text-color--accent">— Sejal &amp; Jagtar’s is one of them. </span></h1><h2 style="text-align:center;white-space:pre-wrap;">The first time Jagtar saw Sejal at the University of Birmingham, he knew—<em>she was the one.</em> From that very moment, their journey unfolded like a timeless romance, filled with gratitude, deep-rooted traditions, and an unshakable belief in love’s divine grace. </h2><p class="" data-rte-preserve-empty="true" style="white-space:pre-wrap;"></p></div>


  
<style id="container-styles">#block-f534b0de7f6ee2fd7556 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-f534b0de7f6ee2fd7556 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-f534b0de7f6ee2fd7556 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-f534b0de7f6ee2fd7556 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-f534b0de7f6ee2fd7556 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-f534b0de7f6ee2fd7556 {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-f534b0de7f6ee2fd7556 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-f534b0de7f6ee2fd7556 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div><div class="fe-block fe-block-yui_3_17_2_1_1739772354422_40000"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="yui_3_17_2_1_1739772354422_40000" id="block-yui_3_17_2_1_1739772354422_40000"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center image-component-container-fit combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="yui_3_17_2_1_1739772354422_40000"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="false"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fit">
          
  
  
  
  
  
  
  <img data-stretch="false"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=750w"
  data-image-dimensions="6268x9402"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="Woman in white dress standing near arched building with intricate lattice windows; man in background leaning against wall."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=750w" width="6268" height="9402" alt="" sizes="auto, (max-width: 640px) 100vw, (max-width: 767px) 100.00vw, 33.33vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/f1ecbef7-68d5-48e6-a279-d64d4c18418a/01+PREWEDDING-18+HIM03873.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-yui_3_17_2_1_1739772354422_40000 {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: contain;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 6268/9402;
  
  
  

      }
      #block-yui_3_17_2_1_1739772354422_40000 .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;

      }
      #block-yui_3_17_2_1_1739772354422_40000 .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-yui_3_17_2_1_1739772354422_40000 .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-d45ff0d971fbd942f5b2"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="d45ff0d971fbd942f5b2" id="block-d45ff0d971fbd942f5b2"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left image-component-container-fit combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="d45ff0d971fbd942f5b2"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="false"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fit">
          
  
  
  
  
  
  
  <img data-stretch="false"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w"
  data-image-dimensions="9228x6152"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="A couple dressed in traditional clothing walking on an empty rural road flanked by trees and tall grass, under an overcast sky."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w" width="9228" height="6152" alt="" sizes="auto, (max-width: 640px) 100vw, (max-width: 767px) 100.00vw, 100.00vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-d45ff0d971fbd942f5b2 {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: contain;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 9228/6152;
  
  
  

      }
      #block-d45ff0d971fbd942f5b2 .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;

      }
      #block-d45ff0d971fbd942f5b2 .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-d45ff0d971fbd942f5b2 .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-cfe16508c29a94992543"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="cfe16508c29a94992543" id="block-cfe16508c29a94992543"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left image-component-container-fit combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="cfe16508c29a94992543"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="false"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fit">
          
  
  
  
  
  
  
  <img data-stretch="false"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w"
  data-image-dimensions="9228x6152"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="Couple walking on a tree-lined road"
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w" width="9228" height="6152" alt="" sizes="auto, (max-width: 640px) 100vw, (max-width: 767px) 100.00vw, 100.00vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/d5946cee-3183-4bb1-b1c5-829f49fa710c/01+PREWEDDING-70+HIM04472.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-cfe16508c29a94992543 {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: contain;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 9228/6152;
  
  
  

      }
      #block-cfe16508c29a94992543 .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;

      }
      #block-cfe16508c29a94992543 .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-cfe16508c29a94992543 .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-2ddef2c638a4c316ddd7"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="2ddef2c638a4c316ddd7" id="block-2ddef2c638a4c316ddd7"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center image-component-container-fit combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="2ddef2c638a4c316ddd7"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="false"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fit">
          
  
  
  
  
  
  
  <img data-stretch="false"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=750w"
  data-image-dimensions="3937x5906"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="A man and woman sitting on stone steps outside a building with arches, ambient lighting, and an elegant atmosphere."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=750w" width="3937" height="5906" alt="" sizes="auto, (max-width: 640px) 100vw, (max-width: 767px) 100.00vw, 33.33vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/700d091b-ad39-451f-96cb-2c896f29cebe/01+PREWEDDING-39+HIM04178.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-2ddef2c638a4c316ddd7 {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: contain;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 3937/5906;
  
  
  

      }
      #block-2ddef2c638a4c316ddd7 .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;

      }
      #block-2ddef2c638a4c316ddd7 .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-2ddef2c638a4c316ddd7 .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-a7529a9dcfa840210f5b"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-aspect-ratio="123.9087580963109" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="a7529a9dcfa840210f5b" id="block-a7529a9dcfa840210f5b"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="a7529a9dcfa840210f5b"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fill">
          
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=750w"
  data-image-dimensions="9236x6157"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="Two people in traditional clothing smiling and posing in a forest."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=750w" width="9236" height="6157" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/61c1f58c-783f-4ab2-a051-675bbae687e6/01+PREWEDDING-92+HIM04704.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-a7529a9dcfa840210f5b {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 9236/6157;
  
  
  

      }
      #block-a7529a9dcfa840210f5b .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;

      }
      #block-a7529a9dcfa840210f5b .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-a7529a9dcfa840210f5b .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-bf8bd2676c9caa5a8a5d"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-aspect-ratio="36.346826916727196" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="bf8bd2676c9caa5a8a5d" id="block-bf8bd2676c9caa5a8a5d"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="bf8bd2676c9caa5a8a5d"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fill">
          
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=750w"
  data-image-dimensions="9000x6000"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="Group celebrating with flower petals, woman in green dress seated, others standing, arched windows in background."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=750w" width="9000" height="6000" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/867193b0-6b1e-4e17-bd7a-5f85c586d2c1/SJ+14+HIM05552.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-bf8bd2676c9caa5a8a5d {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 9000/6000;
  
  
  

      }
      #block-bf8bd2676c9caa5a8a5d .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;

      }
      #block-bf8bd2676c9caa5a8a5d .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-bf8bd2676c9caa5a8a5d .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-beb5e4ba29a54aef5b5d"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-aspect-ratio="36.346826916727196" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="beb5e4ba29a54aef5b5d" id="block-beb5e4ba29a54aef5b5d"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="beb5e4ba29a54aef5b5d"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fill">
          
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=750w"
  data-image-dimensions="9290x6193"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="Group photo of people wearing festive, colorful clothing in front of an arched building. Some are seated on steps, while others stand, smiling at the camera."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=750w" width="9290" height="6193" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/cf65849c-57bc-4422-bbfd-50ab2de38ebb/SJ+16+HIM05519.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-beb5e4ba29a54aef5b5d {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 9290/6193;
  
  
  

      }
      #block-beb5e4ba29a54aef5b5d .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;

      }
      #block-beb5e4ba29a54aef5b5d .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-beb5e4ba29a54aef5b5d .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div></div></div>
    </div>
  
  </div>
  
</section>

  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme=""
  class='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--small
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '
  
  data-section-id="67b30a4cf408d02af3aa702d"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--small&quot;,
&quot;customSectionHeight&quot;: 1,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 2,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: null,
&quot;divider&quot;: null,
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  data-fluid-engine-section
   
  
    
  
  
  
  
  


  data-sqsp-section="fluid-engine"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style>

.fe-67b30a4cf408d02af3aa702c {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(48,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-67b30a4cf408d02af3aa702c {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-67b30a4cf408d02af3aa702c {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(27,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-960c9f3cfd367c79368e {
    grid-area: 1/2/4/7;
    z-index: 3;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-960c9f3cfd367c79368e .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-960c9f3cfd367c79368e .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-960c9f3cfd367c79368e {
      grid-area: 1/4/10/12;
      z-index: 3;

      

      
    }

    .fe-block-960c9f3cfd367c79368e .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-960c9f3cfd367c79368e .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-925a80c3df78046c023b {
    grid-area: 5/4/16/10;
    z-index: 0;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-925a80c3df78046c023b .sqs-block {
    justify-content: center;
  }

  .fe-block-925a80c3df78046c023b .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-925a80c3df78046c023b {
      grid-area: 1/12/14/26;
      z-index: 0;

      

      
    }

    .fe-block-925a80c3df78046c023b .sqs-block {
      justify-content: center;
    }

    .fe-block-925a80c3df78046c023b .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-5048a8a7170c6836518d {
    grid-area: 16/4/27/10;
    z-index: 2;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-5048a8a7170c6836518d .sqs-block {
    justify-content: center;
  }

  .fe-block-5048a8a7170c6836518d .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-5048a8a7170c6836518d {
      grid-area: 14/8/27/20;
      z-index: 2;

      

      
    }

    .fe-block-5048a8a7170c6836518d .sqs-block {
      justify-content: center;
    }

    .fe-block-5048a8a7170c6836518d .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-57f7bc71074670b92a8b {
    grid-area: 27/4/38/10;
    z-index: 2;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-57f7bc71074670b92a8b .sqs-block {
    justify-content: center;
  }

  .fe-block-57f7bc71074670b92a8b .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-57f7bc71074670b92a8b {
      grid-area: 15/20/28/26;
      z-index: 2;

      

      
    }

    .fe-block-57f7bc71074670b92a8b .sqs-block {
      justify-content: center;
    }

    .fe-block-57f7bc71074670b92a8b .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-3a2d79bc1d73b3b2b203 {
    grid-area: 38/4/49/10;
    z-index: 1;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-3a2d79bc1d73b3b2b203 .sqs-block {
    justify-content: center;
  }

  .fe-block-3a2d79bc1d73b3b2b203 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-3a2d79bc1d73b3b2b203 {
      grid-area: 10/2/23/8;
      z-index: 1;

      

      
    }

    .fe-block-3a2d79bc1d73b3b2b203 .sqs-block {
      justify-content: center;
    }

    .fe-block-3a2d79bc1d73b3b2b203 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><div class="fluid-engine fe-67b30a4cf408d02af3aa702c"><div class="fe-block fe-block-960c9f3cfd367c79368e"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="960c9f3cfd367c79368e" id="block-960c9f3cfd367c79368e"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><p class="sqsrte-large" style="white-space:pre-wrap;">Set against the regal backdrop of <strong>The Oberoi Sukhvilas, Chandigarh</strong>, their wedding was a masterclass in understated luxury— </p><h1 style="white-space:pre-wrap;"><span class="sqsrte-text-color--accent"><strong>royal, chic, yet effortlessly elegant.</strong> </span></h1></div>


  
<style id="container-styles">#block-960c9f3cfd367c79368e {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-960c9f3cfd367c79368e .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-960c9f3cfd367c79368e {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-960c9f3cfd367c79368e {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-960c9f3cfd367c79368e {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-960c9f3cfd367c79368e {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-960c9f3cfd367c79368e {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-960c9f3cfd367c79368e .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div><div class="fe-block fe-block-925a80c3df78046c023b"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-aspect-ratio="140.1329386136402" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="925a80c3df78046c023b" id="block-925a80c3df78046c023b"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="925a80c3df78046c023b"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fill">
          
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=750w"
  data-image-dimensions="5272x2962"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="Traditional Indian architecture with arched doorway and lattice windows, surrounded by manicured hedges."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=750w" width="5272" height="2962" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/c28e0a57-f431-4491-9b05-4f2711fd9e4f/03+SANGEET+%26+AFTERPARTY-4+DJI_0199.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-925a80c3df78046c023b {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 5272/2962;
  
  
  

      }
      #block-925a80c3df78046c023b .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;

      }
      #block-925a80c3df78046c023b .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-925a80c3df78046c023b .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-5048a8a7170c6836518d"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-aspect-ratio="140.1329386136402" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="5048a8a7170c6836518d" id="block-5048a8a7170c6836518d"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="5048a8a7170c6836518d"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fill">
          
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=750w"
  data-image-dimensions="9504x6336"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="Woman in floral dress standing on steps in front of a building with arched entrance and greenery."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=750w" width="9504" height="6336" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/4d76afdd-d3d2-4ab0-b043-6fd471d5dfdf/03+MEHENDI+-+296+HIM07332.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-5048a8a7170c6836518d {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 9504/6336;
  
  
  

      }
      #block-5048a8a7170c6836518d .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;

      }
      #block-5048a8a7170c6836518d .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-5048a8a7170c6836518d .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-57f7bc71074670b92a8b"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-aspect-ratio="140.1329386136402" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="57f7bc71074670b92a8b" id="block-57f7bc71074670b92a8b"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="57f7bc71074670b92a8b"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fill">
          
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=750w"
  data-image-dimensions="6157x9236"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="A wooden cart holding bamboo umbrellas, baskets of flowers, and paper parasols, located outdoors next to green bushes and trees."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=750w" width="6157" height="9236" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a1b02cf0-f7a4-4b3b-a073-078783926349/03+MEHENDI+-+102+HIM07120.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-57f7bc71074670b92a8b {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 6157/9236;
  
  
  

      }
      #block-57f7bc71074670b92a8b .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;

      }
      #block-57f7bc71074670b92a8b .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-57f7bc71074670b92a8b .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-3a2d79bc1d73b3b2b203"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-aspect-ratio="140.1329386136402" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="3a2d79bc1d73b3b2b203" id="block-3a2d79bc1d73b3b2b203"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="3a2d79bc1d73b3b2b203"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fill">
          
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=750w"
  data-image-dimensions="6231x9346"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt="A woman in a colorful Indian lehenga poses against a wall adorned with floral patterns."
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=750w" width="6231" height="9346" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/79b99b41-1fcd-44d9-bb16-b289482798e8/03+MEHENDI+-+291+HIM07212.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-3a2d79bc1d73b3b2b203 {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 6231/9346;
  
  
  

      }
      #block-3a2d79bc1d73b3b2b203 .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;

      }
      #block-3a2d79bc1d73b3b2b203 .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-3a2d79bc1d73b3b2b203 .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div></div></div>
    </div>
  
  </div>
  
</section>

  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme=""
  class='page-section 
    
      gallery-section
      full-bleed-section
    
    background-width--full-bleed
    
      section-height--medium
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '
  
  data-section-id="67b3146861ae5f51f144cacf"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;sectionTheme&quot;: &quot;&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;,
&quot;backgroundImage&quot;: null
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: null,
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  
  data-json-schema-section 
  
  
  
  
  


  data-sqsp-section="gallery"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
        <div class="gallery gallery-section-wrapper" style="min-height: 100px;">
          

<div class="gallery" style="min-height: 100px;">
  

  

  

  

  
    <!-- Gallery Fullscreen Slideshow --><div
  class="gallery-fullscreen-slideshow"
  data-controller="GalleryFullscreenSlideshow"
  
  data-section-id="67b3146861ae5f51f144cacf"
  style="height: 100vh;"
  data-width="full-bleed"
  data-transition="site-default"
  data-controls="arrows"
  data-show-captions="false"
  data-props='{
"width": "full-bleed",
"viewportHeight": 100,
"transition": "site-default",
"controls": "arrows",
"autoplayEnabled": false,
"slideDurationMs": 5000
}'
  data-test="gallery-slideshow-full"
>
  <div class="gallery-fullscreen-slideshow-wrapper">
    <div class="gallery-fullscreen-slideshow-list">
      
      <figure class="gallery-fullscreen-slideshow-item" data-slide-url="6i9khr8yo0scoatyuizu1qvb32k9ud" data-active="true" data-in="true" data-next="true">
        
          <div class="gallery-fullscreen-slideshow-item-wrapper">
            <div class="gallery-fullscreen-slideshow-item-src">
              <div class="gallery-fullscreen-slideshow-item-img" data-animation-role="image">
                
                  
                  
                  
                  
                  

                  
                    
                  

                  
                  
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w" data-image-dimensions="6911x4607" data-image-focal-point="0.5,0.35" alt="SJ 57 SD204656.jpg" data-load="false" elementtiming="nbf-gallery-fullscreen-slideshow" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w" width="6911" height="4607" alt="" sizes="max(100vw, 150.01085304970698vh)" style="display:block;object-position: 50% 35%; object-fit:cover; width: 100%; height: 100%;" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                
                
              </div>
            </div>
          </div>
        
        
      </figure>
      
      <figure class="gallery-fullscreen-slideshow-item" data-slide-url="py7s0iddy18tyk7zg6ude7cf6yg6n8">
        
          <div class="gallery-fullscreen-slideshow-item-wrapper">
            <div class="gallery-fullscreen-slideshow-item-src">
              <div class="gallery-fullscreen-slideshow-item-img" data-animation-role="image">
                
                  
                  
                  
                  
                  

                  
                    
                    
                    
                  

                  
                  
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w" data-image-dimensions="6514x4343" data-image-focal-point="0.52,0.56" alt="SJ 68 SD107023.jpg" data-load="false" elementtiming="nbf-gallery-fullscreen-slideshow" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w" width="6514" height="4343" alt="" sizes="max(100vw, 149.9884872208151vh)" style="display:block;object-position: 52% 56.00000000000001%; object-fit:cover; width: 100%; height: 100%;display: none;" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=2500w 2500w" fetchpriority="low" loading="lazy" decoding="async" data-loader="sqs">
                
                
              </div>
            </div>
          </div>
        
        
      </figure>
      
      <figure class="gallery-fullscreen-slideshow-item" data-slide-url="q6mt9j714hqe3agrb5kxcgltrb80lk">
        
          <div class="gallery-fullscreen-slideshow-item-wrapper">
            <div class="gallery-fullscreen-slideshow-item-src">
              <div class="gallery-fullscreen-slideshow-item-img" data-animation-role="image">
                
                  
                  
                  
                  
                  

                  
                    
                    
                    
                  

                  
                  
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w" data-image-dimensions="6691x4461" data-image-focal-point="0.5,0.5" alt="SJ 64 SD106940.jpg" data-load="false" elementtiming="nbf-gallery-fullscreen-slideshow" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w" width="6691" height="4461" alt="" sizes="max(100vw, 149.98879175072852vh)" style="display:block;object-position: 50% 50%; object-fit:cover; width: 100%; height: 100%;display: none;" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=2500w 2500w" fetchpriority="low" loading="lazy" decoding="async" data-loader="sqs">
                
                
              </div>
            </div>
          </div>
        
        
      </figure>
      
    </div>

    <div class="gallery-fullscreen-slideshow-controls">
      <div class="gallery-fullscreen-slideshow-control">
        <button class="gallery-fullscreen-slideshow-control-btn" data-previous aria-label="Previous Slide">
          <div class="gallery-fullscreen-slideshow-control-btn-icon">
            <svg class="caret-left-icon--small" viewBox="0 0 9 16">
              <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2 "/>
            </svg>
          </div>
        </button>
      </div>
      <div class="gallery-fullscreen-slideshow-control">
        <button class="gallery-fullscreen-slideshow-control-btn" data-next aria-label="Next Slide">
          <div class="gallery-fullscreen-slideshow-control-btn-icon">
            <svg class="caret-right-icon--small" viewBox="0 0 9 16">
              <polyline fill="none" stroke-miterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7 "/>
            </svg>
          </div>
        </button>
      </div>
    </div>

    <div class="gallery-fullscreen-slideshow-bullet-nav">
      
        <button class="gallery-fullscreen-slideshow-bullet" data-slide-url="6i9khr8yo0scoatyuizu1qvb32k9ud" data-target="1">
          <span hidden class="js-slideshow-inactive-slide">Slide 1</span>
          <span hidden class="js-slideshow-active-slide">Slide 1 (current slide)</span>
        </button>
      
        <button class="gallery-fullscreen-slideshow-bullet" data-slide-url="py7s0iddy18tyk7zg6ude7cf6yg6n8" data-target="2">
          <span hidden class="js-slideshow-inactive-slide">Slide 2</span>
          <span hidden class="js-slideshow-active-slide">Slide 2 (current slide)</span>
        </button>
      
        <button class="gallery-fullscreen-slideshow-bullet" data-slide-url="q6mt9j714hqe3agrb5kxcgltrb80lk" data-target="3">
          <span hidden class="js-slideshow-inactive-slide">Slide 3</span>
          <span hidden class="js-slideshow-active-slide">Slide 3 (current slide)</span>
        </button>
      
    </div>
  </div>
  <div class="gallery-lightbox-outer-wrapper" data-lightbox="false" data-controller="Lightbox">
    <div
  role="dialog"
  aria-label="Gallery"
  class="gallery-lightbox"
  data-section-theme=""
>
  <div class="gallery-lightbox-background"></div>

<div class="gallery-lightbox-header">
  <button class="gallery-lightbox-close-btn" aria-label="Close" data-close data-test="gallery-lightbox-close">
    <div class="gallery-lightbox-close-btn-icon">
      <svg viewBox="0 0 40 40">
        <path d="M4.3,35.7L35.7,4.3"/>
        <path d="M4.3,4.3l31.4,31.4"/>
      </svg>
    </div>
  </button>
</div>


  <div class="gallery-lightbox-wrapper">
    <div class="gallery-lightbox-list">
      
        <figure
          class="gallery-lightbox-item"
          data-slide-url="6i9khr8yo0scoatyuizu1qvb32k9ud"
          
          data-test="gallery-lightbox-item"
        >
          <div class="gallery-lightbox-item-wrapper">
            <div class="gallery-lightbox-item-src">
              <div
                class="
                  gallery-lightbox-item-img
                  content-fit
                "
              >
                
                  
                  
                  
                  
                  
                  
                  
                  
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w" data-image-dimensions="6911x4607" data-image-focal-point="0.5,0.35" alt="SJ 57 SD204656.jpg" data-load="false" elementtiming="nbf-gallery-lightbox-item" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w" width="6911" height="4607" alt="" sizes="(max-width: 575px) min(88vw - 40px, (100vh - 12vw) * 1.5001085304970696),min(94vw - 40px, (100vh - 6vw) * 1.5001085304970696)" style="display:block;object-fit:contain; width: 100%; height: 100%;;display:none" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/6a2cfd06-b18c-4cae-8c11-d938d343c3aa/SJ+57+SD204656.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                
                
              </div>
            </div>
          </div>
        </figure>
      
        <figure
          class="gallery-lightbox-item"
          data-slide-url="py7s0iddy18tyk7zg6ude7cf6yg6n8"
          
          data-test="gallery-lightbox-item"
        >
          <div class="gallery-lightbox-item-wrapper">
            <div class="gallery-lightbox-item-src">
              <div
                class="
                  gallery-lightbox-item-img
                  content-fit
                "
              >
                
                  
                  
                  
                  
                  
                  
                  
                  
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w" data-image-dimensions="6514x4343" data-image-focal-point="0.52,0.56" alt="SJ 68 SD107023.jpg" data-load="false" elementtiming="nbf-gallery-lightbox-item" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w" width="6514" height="4343" alt="" sizes="(max-width: 575px) min(88vw - 40px, (100vh - 12vw) * 1.499884872208151),min(94vw - 40px, (100vh - 6vw) * 1.499884872208151)" style="display:block;object-fit:contain; width: 100%; height: 100%;;display:none" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/bd683fd2-0269-4c11-bdb8-2e5f01043e3e/SJ+68+SD107023.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                
                
              </div>
            </div>
          </div>
        </figure>
      
        <figure
          class="gallery-lightbox-item"
          data-slide-url="q6mt9j714hqe3agrb5kxcgltrb80lk"
          
          data-test="gallery-lightbox-item"
        >
          <div class="gallery-lightbox-item-wrapper">
            <div class="gallery-lightbox-item-src">
              <div
                class="
                  gallery-lightbox-item-img
                  content-fit
                "
              >
                
                  
                  
                  
                  
                  
                  
                  
                  
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w" data-image-dimensions="6691x4461" data-image-focal-point="0.5,0.5" alt="SJ 64 SD106940.jpg" data-load="false" elementtiming="nbf-gallery-lightbox-item" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w" width="6691" height="4461" alt="" sizes="(max-width: 575px) min(88vw - 40px, (100vh - 12vw) * 1.4998879175072855),min(94vw - 40px, (100vh - 6vw) * 1.4998879175072855)" style="display:block;object-fit:contain; width: 100%; height: 100%;;display:none" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/fb06920f-0db0-4721-8b2b-78161887a8f6/SJ+64+SD106940.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                
                
              </div>
            </div>
          </div>
        </figure>
      
    </div>

    <div class="gallery-lightbox-controls" data-test="gallery-lightbox-controls">
  <div class="gallery-lightbox-control" data-previous data-test="gallery-lightbox-control-previous">
    <button class="gallery-lightbox-control-btn" aria-label="Previous Slide">
      <div class="gallery-lightbox-control-btn-icon">
        <svg class="caret-left-icon--small" viewBox="0 0 9 16">
          <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2 "/>
        </svg>
      </div>
    </button>
  </div>
  <div class="gallery-lightbox-control" data-next data-test="gallery-lightbox-control-next">
    <button class="gallery-lightbox-control-btn" aria-label="Next Slide">
      <div class="gallery-lightbox-control-btn-icon">
        <svg class="caret-right-icon--small" viewBox="0 0 9 16">
          <polyline fill="none" stroke-miterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7 "/>
        </svg>
      </div>
    </button>
  </div>
</div>

  </div>
</div>

  </div>
</div>

  

  
</div>

        </div>
      
      
    </div>
  
  </div>
  
</section>

  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme=""
  class='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--small
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '
  
  data-section-id="67b2dc234cd7762cdddd6f61"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--small&quot;,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 2,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  data-fluid-engine-section
   
  
  
  
  
  


  data-sqsp-section="fluid-engine"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style>

.fe-67b2dc234cd7762cdddd6f60 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(2,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-67b2dc234cd7762cdddd6f60 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-67b2dc234cd7762cdddd6f60 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(5,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-6ed1152158336f5f5d31 {
    grid-area: 1/2/3/10;
    z-index: 1;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-6ed1152158336f5f5d31 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-6ed1152158336f5f5d31 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-6ed1152158336f5f5d31 {
      grid-area: 1/15/6/26;
      z-index: 1;

      

      
    }

    .fe-block-6ed1152158336f5f5d31 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-6ed1152158336f5f5d31 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><div class="fluid-engine fe-67b2dc234cd7762cdddd6f60"><div class="fe-block fe-block-6ed1152158336f5f5d31"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="6ed1152158336f5f5d31" id="block-6ed1152158336f5f5d31"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><h3 style="white-space:pre-wrap;">An intimate gathering of close family and friends, it wasn’t just a celebration; <strong>it was a tribute to the purity of love and the sanctity of tradition.</strong></h3></div>


  
<style id="container-styles">#block-6ed1152158336f5f5d31 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-6ed1152158336f5f5d31 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-6ed1152158336f5f5d31 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-6ed1152158336f5f5d31 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-6ed1152158336f5f5d31 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-6ed1152158336f5f5d31 {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-6ed1152158336f5f5d31 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-6ed1152158336f5f5d31 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div></div></div>
    </div>
  
  </div>
  
</section>

  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme="dark"
  class='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--inset
    
      section-height--large
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
       has-background
    
    
    dark'
  
  data-section-id="67b2dc234cd7762cdddd6f64"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;backgroundImage&quot;: {
&quot;id&quot;: &quot;67b30579bcb49e4e16f16856&quot;,
&quot;recordType&quot;: 2,
&quot;addedOn&quot;: 1739785593185,
&quot;updatedOn&quot;: 1739785593291,
&quot;workflowState&quot;: 1,
&quot;publishOn&quot;: 1739785593185,
&quot;authorId&quot;: &quot;605b61dd2326317867eed357&quot;,
&quot;systemDataId&quot;: &quot;a3678792-344f-4ee7-ba47-8c60db78d8d5&quot;,
&quot;systemDataVariants&quot;: &quot;9504x6336,100w,300w,500w,750w,1000w,1500w,2500w&quot;,
&quot;systemDataSourceType&quot;: &quot;JPG&quot;,
&quot;filename&quot;: &quot;06 ANAND KARAJ-267 HIM08899.jpg&quot;,
&quot;mediaFocalPoint&quot;: {
&quot;x&quot;: 0.5,
&quot;y&quot;: 0.5,
&quot;source&quot;: 3
},
&quot;colorData&quot;: {
&quot;topLeftAverage&quot;: &quot;a9a4ad&quot;,
&quot;topRightAverage&quot;: &quot;b8a9a0&quot;,
&quot;bottomLeftAverage&quot;: &quot;a87f70&quot;,
&quot;bottomRightAverage&quot;: &quot;b87a7d&quot;,
&quot;centerAverage&quot;: &quot;beb0ac&quot;,
&quot;suggestedBgColor&quot;: &quot;b6a8a5&quot;
},
&quot;urlId&quot;: &quot;qdlf42xkcfxhnj4p4zwy94ulg2b2cz&quot;,
&quot;title&quot;: &quot;&quot;,
&quot;body&quot;: null,
&quot;likeCount&quot;: 0,
&quot;commentCount&quot;: 0,
&quot;publicCommentCount&quot;: 0,
&quot;commentState&quot;: 2,
&quot;unsaved&quot;: false,
&quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg&quot;,
&quot;contentType&quot;: &quot;image/jpeg&quot;,
&quot;items&quot;: [ ],
&quot;pushedServices&quot;: { },
&quot;pendingPushedServices&quot;: { },
&quot;originalSize&quot;: &quot;9504x6336&quot;,
&quot;recordTypeLabel&quot;: &quot;image&quot;
},
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--inset&quot;,
&quot;sectionHeight&quot;: &quot;section-height--large&quot;,
&quot;customSectionHeight&quot;: 85,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;dark&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  data-fluid-engine-section
   
  
    
  
  
  
  
  


  data-sqsp-section="fluid-engine"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
        
        
          





  



<img alt="" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=750w" data-image-dimensions="9504x6336" data-image-focal-point="0.5,0.5" alt="06 ANAND KARAJ-267 HIM08899.jpg" data-load="false" elementtiming="nbf-background" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=750w" width="9504" height="6336" alt="" sizes="(max-width: 799px) 200vw, 100vw" style="display:block;object-position: 50% 50%" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/a3678792-344f-4ee7-ba47-8c60db78d8d5/06+ANAND+KARAJ-267+HIM08899.jpg?format=2500w 2500w" fetchpriority="low" loading="lazy" decoding="async" data-loader="sqs">




        
        <div class="section-background-overlay" style="opacity: 0.15;"></div>
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style>

.fe-67b2dc234cd7762cdddd6f63 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(16,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-67b2dc234cd7762cdddd6f63 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-67b2dc234cd7762cdddd6f63 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(6,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-9f5ea2aca7ac7be4b074 {
    grid-area: 1/2/17/10;
    z-index: 0;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-9f5ea2aca7ac7be4b074 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-9f5ea2aca7ac7be4b074 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-9f5ea2aca7ac7be4b074 {
      grid-area: 1/5/7/23;
      z-index: 0;

      

      
    }

    .fe-block-9f5ea2aca7ac7be4b074 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-9f5ea2aca7ac7be4b074 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><div class="fluid-engine fe-67b2dc234cd7762cdddd6f63"><div class="fe-block fe-block-9f5ea2aca7ac7be4b074"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="9f5ea2aca7ac7be4b074" id="block-9f5ea2aca7ac7be4b074"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><h2 style="white-space:pre-wrap;"><span class="sqsrte-text-color--white">“he simply smiled and said, </span></h2><h2 style="white-space:pre-wrap;"><span class="sqsrte-text-color--white"><em>"I wanted our wedding to be as divine and pure as our love.”</em></span></h2></div>


  
<style id="container-styles">#block-9f5ea2aca7ac7be4b074 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-9f5ea2aca7ac7be4b074 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-9f5ea2aca7ac7be4b074 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-9f5ea2aca7ac7be4b074 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-9f5ea2aca7ac7be4b074 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-9f5ea2aca7ac7be4b074 {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-9f5ea2aca7ac7be4b074 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-9f5ea2aca7ac7be4b074 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div></div></div>
    </div>
  
  </div>
  
</section>

  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme=""
  class='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--small
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '
  
  data-section-id="67b2fad4d8823919864381fc"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--small&quot;,
&quot;customSectionHeight&quot;: 1,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 2,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: null,
&quot;divider&quot;: null,
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  data-fluid-engine-section
   
  
    
  
  
  
  
  


  data-sqsp-section="fluid-engine"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style>

.fe-67b2fad4d8823919864381fb {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(14,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-67b2fad4d8823919864381fb {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-67b2fad4d8823919864381fb {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(25,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-bcbbd9245b3472bbc691 {
    grid-area: 5/2/15/10;
    z-index: 0;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-bcbbd9245b3472bbc691 .sqs-block {
    justify-content: center;
  }

  .fe-block-bcbbd9245b3472bbc691 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-bcbbd9245b3472bbc691 {
      grid-area: 3/2/26/26;
      z-index: 0;

      

      
    }

    .fe-block-bcbbd9245b3472bbc691 .sqs-block {
      justify-content: center;
    }

    .fe-block-bcbbd9245b3472bbc691 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-77b5f6cc4958a25bd0f5 {
    grid-area: 1/3/8/9;
    z-index: 1;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-77b5f6cc4958a25bd0f5 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-77b5f6cc4958a25bd0f5 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-77b5f6cc4958a25bd0f5 {
      grid-area: 1/5/5/23;
      z-index: 1;

      

      
    }

    .fe-block-77b5f6cc4958a25bd0f5 .sqs-block {
      justify-content: center;
    }

    .fe-block-77b5f6cc4958a25bd0f5 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><div class="fluid-engine fe-67b2fad4d8823919864381fb"><div class="fe-block fe-block-bcbbd9245b3472bbc691"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-aspect-ratio="57.33930617772685" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="bcbbd9245b3472bbc691" id="block-bcbbd9245b3472bbc691"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="bcbbd9245b3472bbc691"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      
        <div class="js-content-mode-element content-fill">
          
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=750w"
  data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=750w"
  data-image-dimensions="7008x4672"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt=""
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=750w" width="7008" height="4672" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/dd729836-a016-453c-9765-3c8e54e2895f/04+BRIDE+GETTING+READY-132+DSC05822.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

        </div>
      
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-bcbbd9245b3472bbc691 {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 7008/4672;
  
  
  

      }
      #block-bcbbd9245b3472bbc691 .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;

      }
      #block-bcbbd9245b3472bbc691 .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-bcbbd9245b3472bbc691 .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-77b5f6cc4958a25bd0f5"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block sqs-background-enabled" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="77b5f6cc4958a25bd0f5" id="block-77b5f6cc4958a25bd0f5"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><div class="sqsrte-scaled-text-container"><span class="sqsrte-scaled-text"><h2 style="text-align:center;white-space:pre-wrap;">From <strong>regal elegance to sacred traditions</strong>, the wedding was a seamless blend of grandeur and grace. </h2></span></div></div>


  
<style id="container-styles">#block-77b5f6cc4958a25bd0f5 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    


    box-sizing: border-box;
    height: 100%;
    

    

  }

  #block-77b5f6cc4958a25bd0f5 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  padding: var(--tweak-text-block-padding);
  
}

  .fe-block-77b5f6cc4958a25bd0f5 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-77b5f6cc4958a25bd0f5 {
      --tweak-text-block-radius: 10px 10px 10px 10px;
    }#block-77b5f6cc4958a25bd0f5 {
      border-radius: var(--tweak-text-block-radius);
    }


  
  .fe-block-77b5f6cc4958a25bd0f5 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-77b5f6cc4958a25bd0f5 {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-77b5f6cc4958a25bd0f5 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-77b5f6cc4958a25bd0f5 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div></div></div>
    </div>
  
  </div>
  
</section>

  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme=""
  class='page-section 
    
      gallery-section
      full-bleed-section
    
    background-width--full-bleed
    
      section-height--medium
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '
  
  data-section-id="69143ae410b4110c5c850f86"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;,
&quot;backgroundImage&quot;: null
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: null,
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  
  data-json-schema-section 
  
  
  
  
  


  data-sqsp-section="gallery"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
        <div class="gallery gallery-section-wrapper" style="min-height: 100px;">
          

<div class="gallery" style="min-height: 100px;">
  

  
    <!-- Gallery Masonry --><div
  class="gallery-masonry"
  data-controller="GalleryMasonry"
  
  data-section-id="69143ae410b4110c5c850f86"
  data-animation="site-default"
  data-lightbox=""
  data-width="inset"
  data-props='{
"scrollAnimation": "site-default",
"gutter": 20,
"numColumns": 2,
"width": "inset",
"lightboxEnabled": false
}'
  data-show-captions="false"
  data-test="gallery-grid-masonry"
>
  <div class="gallery-masonry-wrapper">
    
    <figure class="gallery-masonry-item">
      <div class="gallery-masonry-item-wrapper" data-animation-role="image">

        
          
          
            
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=750w" data-image-dimensions="5741x8611" data-image-focal-point="0.5,0.5" alt="04 BRIDE GETTING READY-46 HIM07877.jpg" data-load="false" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=750w" width="5741" height="8611" alt="" sizes="49.5vw" style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/533e2f14-fdfd-4d3f-a1da-d7723e8ffa31/04+BRIDE+GETTING+READY-46+HIM07877.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">

          
          
        
      </div>
      
    </figure>
    
    <figure class="gallery-masonry-item">
      <div class="gallery-masonry-item-wrapper" data-animation-role="image">

        
          
          
            
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=750w" data-image-dimensions="2766x4149" data-image-focal-point="0.5,0.5" alt="05 GROOM GETTING READY &amp; BARAAT-23 SD107011.jpg" data-load="false" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=750w" width="2766" height="4149" alt="" sizes="49.5vw" style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/76555f89-3298-423f-8f41-2c94147c1ff0/05+GROOM+GETTING+READY+%26+BARAAT-23+SD107011.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">

          
          
        
      </div>
      
    </figure>
    
    <figure class="gallery-masonry-item">
      <div class="gallery-masonry-item-wrapper" data-animation-role="image">

        
          
          
            
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=750w" data-image-dimensions="4608x3072" data-image-focal-point="0.5,0.5" alt="06 ANAND KARAJ-83 SD107349.jpg" data-load="false" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=750w" width="4608" height="3072" alt="" sizes="49.5vw" style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/ae729b50-ec3b-4625-9d67-fa1aa75352ab/06+ANAND+KARAJ-83+SD107349.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">

          
          
        
      </div>
      
    </figure>
    
    <figure class="gallery-masonry-item">
      <div class="gallery-masonry-item-wrapper" data-animation-role="image">

        
          
          
            
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=750w" data-image-dimensions="2551x3827" data-image-focal-point="0.5,0.5" alt="06 ANAND KARAJ-122 SD107422.jpg" data-load="false" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=750w" width="2551" height="3827" alt="" sizes="49.5vw" style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/b15dd6a4-959f-438f-87d7-d558bca23a6a/06+ANAND+KARAJ-122+SD107422.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">

          
          
        
      </div>
      
    </figure>
    
    <figure class="gallery-masonry-item">
      <div class="gallery-masonry-item-wrapper" data-animation-role="image">

        
          
          
            
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=750w" data-image-dimensions="5488x8232" data-image-focal-point="0.5,0.5" alt="03 SANGEET &amp; AFTERPARTY-61 HIM06048.jpg" data-load="false" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=750w" width="5488" height="8232" alt="" sizes="49.5vw" style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/9e7df66b-aab1-4672-a7af-903ebde6190e/03+SANGEET+%26+AFTERPARTY-61+HIM06048.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">

          
          
        
      </div>
      
    </figure>
    
    <figure class="gallery-masonry-item">
      <div class="gallery-masonry-item-wrapper" data-animation-role="image">

        
          
          
            
<img src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=750w" data-src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=750w" data-image="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=750w" data-image-dimensions="5861x8839" data-image-focal-point="0.5,0.5" alt="03 SANGEET &amp; AFTERPARTY-65 HIM06145.jpg" data-load="false" src="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=750w" width="5861" height="8839" alt="" sizes="49.5vw" style="display:block;object-position:50% 50%;object-fit:cover;width:100%;height:100%" srcset="https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/62838fda1d80b676079fcce4/37bf31aa-0937-4461-9f6f-2aaa0eb49350/03+SANGEET+%26+AFTERPARTY-65+HIM06145.jpg?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">

          
          
        
      </div>
      
    </figure>
    
  </div>
  
</div>

  

  

  

  

  
</div>

        </div>
      
      
    </div>
  
  </div>
  
</section>

  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme=""
  class='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--medium
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '
  
  data-section-id="67b2dc234cd7762cdddd6f67"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: null,
&quot;divider&quot;: null,
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  data-fluid-engine-section
   
  
  
  
  
  


  data-sqsp-section="fluid-engine"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style>

.fe-67b2dc234cd7762cdddd6f66 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(1,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-67b2dc234cd7762cdddd6f66 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-67b2dc234cd7762cdddd6f66 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(1,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}



/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><div class="fluid-engine fe-67b2dc234cd7762cdddd6f66"></div></div>
    </div>
  
  </div>
  
</section>

  
</article>

          

          

          
            
              
            
          
        
      </main>
      
        <footer class="sections" id="footer-sections" data-footer-sections>
  
  
  
  
  
  
    
    


  
  











<section
  data-test="page-section"
  
  data-section-theme="dark-bold"
  class='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      
        section-height--custom
      
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    dark-bold'
  
  data-section-id="630485c68279d40bf40889db"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
&quot;customSectionHeight&quot;: 10,
&quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
&quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
&quot;contentWidth&quot;: &quot;content-width--wide&quot;,
&quot;customContentWidth&quot;: 50,
&quot;sectionTheme&quot;: &quot;dark-bold&quot;,
&quot;sectionAnimation&quot;: &quot;none&quot;,
&quot;backgroundMode&quot;: &quot;image&quot;
}"
  data-current-context="{
&quot;video&quot;: {
&quot;playbackSpeed&quot;: 0.5,
&quot;filter&quot;: 1,
&quot;filterStrength&quot;: 0,
&quot;zoom&quot;: 0,
&quot;videoSourceProvider&quot;: &quot;none&quot;
},
&quot;backgroundImageId&quot;: null,
&quot;backgroundMediaEffect&quot;: {
&quot;type&quot;: &quot;none&quot;
},
&quot;divider&quot;: {
&quot;enabled&quot;: false
},
&quot;typeName&quot;: &quot;page&quot;
}"
  data-animation="none"
  data-fluid-engine-section
   
  
     style="min-height: 10vh;" 
  
  
  
  
  


  data-sqsp-section="fluid-engine"


>
  <div
    class="section-border"
    
  >
    <div class="section-background">
    
      
    
    </div>
  </div>
  <div
    class='content-wrapper'
    style='
      
        
          
          padding-top: calc(10vmax / 10); padding-bottom: calc(10vmax / 10);
        
      
    '
  >
    <div
      class="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style>

.fe-630485c6743bfea0d7b05832 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(31,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-630485c6743bfea0d7b05832 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-630485c6743bfea0d7b05832 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(8,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-630485c6f6a40b8b351bf88a {
    grid-area: 1/2/12/10;
    z-index: 0;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-630485c6f6a40b8b351bf88a .sqs-block {
    justify-content: center;
  }

  .fe-block-630485c6f6a40b8b351bf88a .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-630485c6f6a40b8b351bf88a {
      grid-area: 1/10/6/18;
      z-index: 0;

      

      
    }

    .fe-block-630485c6f6a40b8b351bf88a .sqs-block {
      justify-content: center;
    }

    .fe-block-630485c6f6a40b8b351bf88a .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-630485c6ad1897f330883720 {
    grid-area: 12/2/16/10;
    z-index: 1;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-630485c6ad1897f330883720 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-630485c6ad1897f330883720 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-630485c6ad1897f330883720 {
      grid-area: 2/2/5/7;
      z-index: 1;

      

      
    }

    .fe-block-630485c6ad1897f330883720 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-630485c6ad1897f330883720 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-630485c697d3a31aa5005a04 {
    grid-area: 16/2/18/10;
    z-index: 2;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-630485c697d3a31aa5005a04 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-630485c697d3a31aa5005a04 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-630485c697d3a31aa5005a04 {
      grid-area: 6/11/8/17;
      z-index: 2;

      

      
    }

    .fe-block-630485c697d3a31aa5005a04 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-630485c697d3a31aa5005a04 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-630485c642fc5b1fac27ae06 {
    grid-area: 18/2/26/10;
    z-index: 3;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-630485c642fc5b1fac27ae06 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-630485c642fc5b1fac27ae06 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-630485c642fc5b1fac27ae06 {
      grid-area: 5/2/9/7;
      z-index: 3;

      

      
    }

    .fe-block-630485c642fc5b1fac27ae06 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-630485c642fc5b1fac27ae06 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-yui_3_17_2_1_1661237561528_110064 {
    grid-area: 26/2/28/10;
    z-index: 5;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-yui_3_17_2_1_1661237561528_110064 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1661237561528_110064 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1661237561528_110064 {
      grid-area: 2/17/4/26;
      z-index: 5;

      

      
    }

    .fe-block-yui_3_17_2_1_1661237561528_110064 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1661237561528_110064 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-5b0cb61a7f09afea4a1a {
    grid-area: 28/2/32/10;
    z-index: 2;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-5b0cb61a7f09afea4a1a .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-5b0cb61a7f09afea4a1a .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-5b0cb61a7f09afea4a1a {
      grid-area: 5/17/6/26;
      z-index: 2;

      

      
    }

    .fe-block-5b0cb61a7f09afea4a1a .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-5b0cb61a7f09afea4a1a .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style><div class="fluid-engine fe-630485c6743bfea0d7b05832"><div class="fe-block fe-block-630485c6f6a40b8b351bf88a"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2452.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/2513.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/8018.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9188.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/9882.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.shared.constants.js&quot;, &quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.imageFluid/872def20-a13e-4aa4-881e-9a64eb27b7e3_826/website.components.imageFluid.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.imageFluid" data-sqsp-block="image" data-website-component-id="630485c6f6a40b8b351bf88a" id="block-630485c6f6a40b8b351bf88a"><div class="sqs-block-content">
































  
  
  <div
    class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-left combination-animation-site-default individual-animation-site-default
    }"
    data-component-id="630485c6f6a40b8b351bf88a"
    data-test="image-block-fluid-outer-wrapper"
    data-is-image-stretched="true"
    data-is-mask-applied="false"
    data-media-focal-point="0.5,0.5"
    
    
      data-bpo=""
      data-breakpoints="[{&quot;id&quot;:&quot;system_desktop&quot;,&quot;name&quot;:&quot;Desktop&quot;},{&quot;id&quot;:&quot;system_mobile&quot;,&quot;name&quot;:&quot;Mobile&quot;,&quot;maxWidth&quot;:&quot;767px&quot;}]"
    
    
  >
    <div
      class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
      data-animation-role="image"
    >
      <div
        class="fluid-image-container sqs-image-content js-image-container visitor-mode"
        
        data-sqsp-image-block-image-container
      >
        
          
  
      
        
        
        
  
  <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
    
      <a
        class="sqs-block-image-link js-content-mode-element content-fill"
        data-sqsp-image-block-link
        href="/"
        
      >
        
  
  
  
  
  
  
  <img data-stretch="true"
  src="https://res.cloudinary.com/nmv4tzev/image/upload/f_auto,q_auto/v1787760085/pchdisakawnw1blxhfha.png" data-src="https://res.cloudinary.com/nmv4tzev/image/upload/f_auto,q_auto/v1787760085/pchdisakawnw1blxhfha.png"
  data-image="https://res.cloudinary.com/nmv4tzev/image/upload/f_auto,q_auto/v1787760085/pchdisakawnw1blxhfha.png"
  data-image-dimensions="1024x341"
  data-image-focal-point="0.5,0.5"
  data-sqsp-image-block-image
  alt=""
  data-licensed-asset-preview="false"
  data-load="false" elementtiming="system-image-block" src="https://res.cloudinary.com/nmv4tzev/image/upload/f_auto,q_auto/v1787760085/pchdisakawnw1blxhfha.png" width="1024" height="341" alt="" sizes="auto, 100vw" style="display:block;object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);" srcset="footer_logo.png 100w, footer_logo.png 300w, footer_logo.png 500w, footer_logo.png 750w, footer_logo.png 1000w, footer_logo.png 1500w, footer_logo.png 2500w" loading="lazy" decoding="async" data-loader="sqs">
  
    
  
  <div class="fluidImageOverlay"></div>

      </a>
    
  </div>
  
  
  


      
    
      
         
      
    
  

        
      </div>
    </div>
    <style>
      
      
      
      #block-630485c6f6a40b8b351bf88a {
        --image-component-focal-point: 50% 50%;
        
  --image-component-object-fit: cover;
  --image-component-overlay-opacity: 0;
  --image-component-overlay-blend-mode: normal;
  
  --image-component-native-aspect-ratio: 4501/4501;
  
  
  

      }
      #block-630485c6f6a40b8b351bf88a .fluid-image-container.visitor-mode {
        
  
  overflow: hidden;-webkit-mask-image: -webkit-radial-gradient(white, black);clip-path: none;-webkit-clip-path: none;

      }
      #block-630485c6f6a40b8b351bf88a .js-content-mode-element-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: none;
      }
      #block-630485c6f6a40b8b351bf88a .js-content-mode-element-system_desktop {
        display: block;
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  </div>

</div></div></div><div class="fe-block fe-block-630485c6ad1897f330883720"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="630485c6ad1897f330883720" id="block-630485c6ad1897f330883720"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><p style="text-align:center;white-space:pre-wrap;" class=""><strong>GET IN TOUCH WITH US</strong></p><pre style="text-align:center;"><code>thecinewala@gmail.com</code></pre><pre style="text-align:center;"><code> +91 97764 66466</code></pre></div>


  
<style id="container-styles">#block-630485c6ad1897f330883720 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-630485c6ad1897f330883720 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-630485c6ad1897f330883720 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-630485c6ad1897f330883720 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-630485c6ad1897f330883720 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-630485c6ad1897f330883720 {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-630485c6ad1897f330883720 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-630485c6ad1897f330883720 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div><div class="fe-block fe-block-630485c697d3a31aa5005a04"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-socialaccountlinks social-account-links-block social-account-links-v2-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.socialLinks/ea7941ee-9223-4382-8f52-37116229a643_617/website.components.socialLinks.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.socialLinks/ea7941ee-9223-4382-8f52-37116229a643_617/website.components.socialLinks.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.socialLinks" data-sqsp-block="social-links" data-website-component-id="630485c697d3a31aa5005a04" id="block-630485c697d3a31aa5005a04"><div class="sqs-block-content">
  























<div class="sqs-block-socialaccountlinks-content">
  <div class="sqs-svg-icon--outer social-icon-alignment-center social-icons-color-black social-icons-size-large social-icons-shape-circle social-icons-style-knockout">
    <style>
      
      #block-630485c697d3a31aa5005a04 {
        --social-icons-justify-content: center;
        --social-icons-dimension: 36px;--social-icons-gap: 10px;
        
      }

      
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--wrapper {
        --si-border-radius: 50%;--si-scale: 1;--si-box-shadow: none;--si-fill-icon: transparent;--si-fill-icon-fade: transparent;--si-fill-icon-hover: transparent;--si-fill-mask: var(--si-primary);--si-fill-mask-fade: var(--si-primary-faded);--si-fill-mask-hover: var(--si-primary);--si-bg: transparent;--si-bg-fade: transparent;--si-bg-hover: transparent;
      }

      
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--list {
        justify-content: var(--social-icons-justify-content, center);
        column-gap: var(--social-icons-gap, 12px);
        row-gap: var(--social-icons-gap, 12px);
      }
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--wrapper {
        width: var(--social-icons-dimension, 20px);
        height: var(--social-icons-dimension, 20px);
        margin: 0;
        border: none; 
        background-color: var(--si-bg, transparent);
        box-shadow: var(--si-box-shadow, none);
        border-radius: var(--si-border-radius, 0);
      }
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--wrapper > div {
        transform: scale(var(--si-scale, 1));
      }
      #block-630485c697d3a31aa5005a04 .sqs-use--icon {
        fill: var(--si-fill-icon, transparent);
      }
      #block-630485c697d3a31aa5005a04 .sqs-use--mask {
        fill: var(--si-fill-mask, transparent);
      }
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--list:hover .sqs-svg-icon--wrapper {
        background-color: var(--si-bg-fade, var(--si-bg, transparent));
      }
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--list:hover .sqs-svg-icon--wrapper .sqs-use--icon {
        fill: var(--si-fill-icon-fade, var(--si-fill-icon, transparent));
      }
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--list:hover .sqs-svg-icon--wrapper .sqs-use--mask {
        fill: var(--si-fill-mask-fade, var(--si-fill-mask, transparent));
      }
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--list:hover .sqs-svg-icon--wrapper:hover {
        background-color: var(--si-bg-hover, var(--si-bg, transparent));
      }
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--list:hover .sqs-svg-icon--wrapper:hover .sqs-use--icon {
        fill: var(--si-fill-icon-hover, var(--si-fill-icon, transparent));
      }
      #block-630485c697d3a31aa5005a04 .sqs-svg-icon--list:hover .sqs-svg-icon--wrapper:hover .sqs-use--mask {
        fill: var(--si-fill-mask-hover, var(--si-fill-mask, transparent));
      }
    
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
    <nav class="sqs-svg-icon--list">
      
        
          <a
            href="https://youtube.com/channel/UCnC7RMAOh3os86bdGU3r-uw"
            target="_blank"
            class="sqs-svg-icon--wrapper youtube-unauth"
            aria-label="YouTube"
          >
            <div>
              <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
                <use class="sqs-use--icon" xlink:href="/universal/svg/social-accounts.svg#youtube-unauth-icon"></use>
                <use class="sqs-use--mask" xlink:href="/universal/svg/social-accounts.svg#youtube-unauth-mask"></use>
              </svg>
            </div>
          </a>
        
      
        
          <a
            href="https://www.instagram.com/epicstories.in/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
            class="sqs-svg-icon--wrapper instagram-unauth"
            aria-label="Instagram"
          >
            <div>
              <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
                <use class="sqs-use--icon" xlink:href="/universal/svg/social-accounts.svg#instagram-unauth-icon"></use>
                <use class="sqs-use--mask" xlink:href="/universal/svg/social-accounts.svg#instagram-unauth-mask"></use>
              </svg>
            </div>
          </a>
        
      
        
          <a
            href="http://facebook.com/epicstories.in"
            target="_blank"
            class="sqs-svg-icon--wrapper facebook-unauth"
            aria-label="Facebook"
          >
            <div>
              <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
                <use class="sqs-use--icon" xlink:href="/universal/svg/social-accounts.svg#facebook-unauth-icon"></use>
                <use class="sqs-use--mask" xlink:href="/universal/svg/social-accounts.svg#facebook-unauth-mask"></use>
              </svg>
            </div>
          </a>
        
      
        
      
        
      
    </nav>
  </div>
  
    
<style id="container-styles">#block-630485c697d3a31aa5005a04 {
    
    
    



  }

  #block-630485c697d3a31aa5005a04 .sqs-block-socialaccountlinks-content {
    
    --tweak-social-links-block-padding: initial;
}

  .fe-block-630485c697d3a31aa5005a04 {
      mix-blend-mode: var(--tweak-social-links-block-blend);
      border-radius: var(--tweak-social-links-block-radius);
  }

  
  



  
  

  .fe-block-630485c697d3a31aa5005a04 {
    }


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-630485c697d3a31aa5005a04 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-630485c697d3a31aa5005a04 .sqs-block-socialaccountlinks-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    <style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

    



  
</div>
</div></div></div><div class="fe-block fe-block-630485c642fc5b1fac27ae06"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="630485c642fc5b1fac27ae06" id="block-630485c642fc5b1fac27ae06"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><pre style="text-align:center;"><code>Address : Flat-203, Cornerstone, near Care Hospital Road, Niladri Vihar, Chandrasekharpur, Bhubaneswar, Odisha 751016</code></pre><p class="" data-rte-preserve-empty="true" style="white-space:pre-wrap;"></p><p style="text-align:center;white-space:pre-wrap;" class="" data-rte-preserve-empty="true"></p></div>


  
<style id="container-styles">#block-630485c642fc5b1fac27ae06 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-630485c642fc5b1fac27ae06 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-630485c642fc5b1fac27ae06 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-630485c642fc5b1fac27ae06 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-630485c642fc5b1fac27ae06 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-630485c642fc5b1fac27ae06 {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-630485c642fc5b1fac27ae06 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-630485c642fc5b1fac27ae06 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div><div class="fe-block fe-block-yui_3_17_2_1_1661237561528_110064"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="yui_3_17_2_1_1661237561528_110064" id="block-yui_3_17_2_1_1661237561528_110064"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><p style="text-align:left;white-space:pre-wrap;" class="sqsrte-small">All Images and Videos Are Copyrighted © 2025 The Cinewale - ESTD 2015</p></div>


  
<style id="container-styles">#block-yui_3_17_2_1_1661237561528_110064 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-yui_3_17_2_1_1661237561528_110064 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-yui_3_17_2_1_1661237561528_110064 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-yui_3_17_2_1_1661237561528_110064 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-yui_3_17_2_1_1661237561528_110064 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-yui_3_17_2_1_1661237561528_110064 {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-yui_3_17_2_1_1661237561528_110064 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-yui_3_17_2_1_1661237561528_110064 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div><div class="fe-block fe-block-5b0cb61a7f09afea4a1a"><div class="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/2129d20b-c038-4fbe-afd5-99eed7e8e5b8_839/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="5b0cb61a7f09afea4a1a" id="block-5b0cb61a7f09afea4a1a"><div class="sqs-block-content"><div class="sqs-text-block-container">
  
  <div class="sqs-html-content" data-sqsp-text-block-content><pre style="text-align:center;"><code>All Images and Videos Are Copyrighted © 2025 The Cinewale - ESTD 2015</code></pre></div>


  
<style id="container-styles">#block-5b0cb61a7f09afea4a1a {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-5b0cb61a7f09afea4a1a .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-5b0cb61a7f09afea4a1a {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-5b0cb61a7f09afea4a1a {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-5b0cb61a7f09afea4a1a {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-5b0cb61a7f09afea4a1a {
    --blur-value: blur(15px);}


/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>

<style id="override-container-styles">
    @media screen and (max-width: 767px) {
          
            

#block-5b0cb61a7f09afea4a1a {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-5b0cb61a7f09afea4a1a .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }
/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>
<style class="transform-overrides-vars">
  

/* Hide header completely on scroll for a cinematic experience */
#header.header-is-scrolled, 
header.header.header-is-scrolled {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(-100%) !important;
  transition: opacity 0.6s ease, transform 0.6s ease !important;
}

</style>




</div>
</div></div></div></div></div>
    </div>
  
  </div>
  
</section>

  

<div class="custom-bottom-bar">
  <div class="custom-bottom-bar-left">
    All Images and Videos Are Copyrighted © 2026 The Cinewale
  </div>
  <div class="custom-bottom-bar-right">
    <a href="/terms-and-condition">Terms & Condition</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="/privacy-policy">Privacy Policy</a>
  </div>
</div>


<div class="thecinewale-custom-footer">
  <!-- LEFT COLUMN: Contact -->
  <div class="tcf-col tcf-col-left">
    <h4>GET IN TOUCH WITH US</h4>
    <div>thecinewale@gmail.com</div>
    <div>+91 97764 66466</div>
    <div style="margin-top: 25px;">Address : Flat-203, Cornerstone, near Care Hospital Road,</div>
    <div>Niladri Vihar, Chandrasekharpur, Bhubaneswar, Odisha</div>
    <div>751016</div>
  </div>

  <!-- CENTER COLUMN: Logo & Socials -->
  <div class="tcf-col tcf-col-center">
    <div class="tcf-logo-wrapper" style="display: flex; justify-content: center; width: 100%; margin-bottom: 25px;"><img src="https://res.cloudinary.com/nmv4tzev/image/upload/f_auto,q_auto/v1787760085/pchdisakawnw1blxhfha.png" alt="The Cinewale" style="max-width: 90%; margin: 0 auto; display: block;" /></div>
    <div class="tcf-socials">
      <a href="#" target="_blank"><svg viewBox="0 0 64 64"><use href="#youtube-unauth-icon"></use></svg></a>
      <a href="https://www.instagram.com/thecinewale/" target="_blank"><svg viewBox="0 0 64 64"><use href="#instagram-unauth-icon"></use></svg></a>
      <a href="https://www.facebook.com/thecinewale/" target="_blank"><svg viewBox="0 0 64 64"><use href="#facebook-unauth-icon"></use></svg></a>
      <a href="https://in.pinterest.com/the_cinewale/" target="_blank"><svg viewBox="0 0 64 64"><use href="#pinterest-unauth-icon"></use></svg></a>
    </div>
  </div>

  <!-- RIGHT COLUMN: Tags & Copyright -->
  <div class="tcf-col tcf-col-right">
    <div class="tags">
      Tags: Cinematic Wedding Stories, Wedding Films, Real Wedding Moments, Candid Photography, Wedding Memories, Indian Weddings, Destination Weddings, Wedding Stories, Cinematic Love Stories, Wedding Filmmakers, The Cinewale
    </div>

    
    
    <!-- NEWSLETTER SECTION -->
    <div class="newsletter-section" style="margin-top: 10px; text-align: center; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <div class="nl-title" style="color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; font-size: 16px !important; font-weight: 300 !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important; letter-spacing: 1px !important; margin-bottom: 8px !important; text-transform: uppercase !important;">NEWSLETTER</div>
      <div class="nl-desc" style="color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; font-size: 14px !important; margin-bottom: 20px !important; line-height: 1.4 !important; font-weight: 300 !important;">Stay updated with our latest stories and films.</div>
      <form id="newsletter-form" class="nl-form" action="#" method="POST" style="display: flex !important; justify-content: center !important; align-items: stretch !important; max-width: 380px !important; margin: 0 auto !important; height: 48px !important;">
        <input id="nl-email" type="email" class="nl-input" placeholder="Your email address" required style="flex: 1 !important; height: 100% !important; padding: 0 20px !important; border: none !important; background-color: #f6f4ed !important; color: #8c7b6c !important; -webkit-text-fill-color: #8c7b6c !important; font-size: 14px !important; outline: none !important; border-radius: 6px 0 0 6px !important; margin: 0 !important; box-sizing: border-box !important;" />
        <button id="nl-submit" type="submit" class="nl-button" aria-label="Subscribe" style="height: 100% !important; background-color: #bea180 !important; border: none !important; padding: 0 25px !important; cursor: pointer !important; border-radius: 0 6px 6px 0 !important; display: flex !important; align-items: center !important; justify-content: center !important; margin: 0 !important; box-sizing: border-box !important;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px !important; height: 22px !important; margin: 0 !important;">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>
      <div id="nl-message" style="display:none; color: #bea180; font-size: 14px; margin-top: 10px;"></div>
      <script>
        setTimeout(() => {
          const nlForm = document.getElementById('newsletter-form');
          const nlMsg = document.getElementById('nl-message');
          const nlInput = document.getElementById('nl-email');
          const nlBtn = document.getElementById('nl-submit');
          if (nlForm && !nlForm.dataset.listenerAttached) {
            nlForm.dataset.listenerAttached = 'true';
            nlForm.addEventListener('submit', async (e) => {
              e.preventDefault();
              const email = nlInput.value;
              nlBtn.disabled = true;
              nlBtn.style.opacity = '0.5';
              try {
                const res = await fetch('http://localhost:8787/api/subscribers', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email })
                });
                if (res.ok) {
                  nlForm.style.display = 'none';
                  nlMsg.innerHTML = 'Thank you for subscribing!';
                  nlMsg.style.display = 'block';
                } else {
                  alert('Something went wrong. Please try again.');
                  nlBtn.disabled = false;
                  nlBtn.style.opacity = '1';
                }
              } catch (err) {
                alert('Network error. Please try again.');
                nlBtn.disabled = false;
                nlBtn.style.opacity = '1';
              }
            });
          }
        }, 500);
      </script>
    </div>



    
  </div>
</div>

</footer>

      
    </div>

    <script defer="true" src="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/scripts/site-bundle.f8068e4a963a1f8acefb1034204b21c1.js" type="text/javascript"></script>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none" data-usage="social-icons-svg"><symbol id="pinterest-unauth-icon" viewBox="0 0 64 64"><path d="M32 14c-9.9 0-18 8.1-18 18 0 7.6 4.8 14.2 11.5 16.9-.2-1.4-.3-3.6.1-5.1.3-1.4 2.2-9.6 2.2-9.6s-.6-1.1-.6-2.9c0-2.7 1.6-4.7 3.5-4.7 1.6 0 2.4 1.2 2.4 2.7 0 1.7-1.1 4.1-1.6 6.5-.4 2 1 3.5 2.9 3.5 3.5 0 6.2-3.7 6.2-9 0-4.7-3.4-8.1-8.3-8.1-5.6 0-8.8 4.2-8.8 8.5 0 1.7.6 3.5 1.4 4.5.2.2.2.4.1.6-.1.6-.5 2.2-.6 2.4-.1.4-.3.4-.6.2-2.4-1.1-3.9-4.6-3.9-7.4 0-6 4.4-11.5 12.6-11.5 6.6 0 11.8 4.7 11.8 11 0 6.6-4.1 11.9-9.9 11.9-2 0-3.8-1-4.4-2.2 0 0-1 3.7-1.2 4.5-.4 1.6-1.6 3.7-2.4 4.9 1.9.6 3.9.9 5.9.9 9.9 0 18-8.1 18-18S41.9 14 32 14z"/></symbol><symbol id="youtube-unauth-icon" viewBox="0 0 64 64"><path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"/></symbol><symbol id="youtube-unauth-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z"/></symbol><symbol id="instagram-unauth-icon" viewBox="0 0 64 64"><path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"/></symbol><symbol id="instagram-unauth-mask" viewBox="0 0 64 64"><path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z"/></symbol><symbol id="facebook-unauth-icon" viewBox="0 0 64 64"><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"/></symbol><symbol id="facebook-unauth-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z"/></symbol></svg>

    
  </body>
</html>
` }} />
  );
}
