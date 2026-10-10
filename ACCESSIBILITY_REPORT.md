# Week 3 Task Report: Enhancing User Experience with Accessibility

WEEK 3 TASK REPORT
Enhancing User Experience with Accessibility
Project: The Open Journal — Accessible Blog Portal

1. Project Overview
The Open Journal is a responsive sample blog and information portal created to demonstrate practical accessibility improvements. The interface includes primary navigation, an introductory section, story cards, topic filters, a newsletter form, and an about section. It uses HTML5, CSS3, and vanilla JavaScript without external JavaScript dependencies.

2. Accessibility Review Approach
A structured self-review was planned around WCAG 2.2 principles: perceivability, operability, understandability, and robustness. The project includes a manual keyboard test plan and instructions for running Lighthouse in Chrome DevTools and the WAVE evaluation tool. No automated score is claimed because those tools must be run against the final page in a browser.

3. Improvements Implemented
Semantic structure: The page uses header, nav, main, section, article, form, and footer elements. A logical heading hierarchy and descriptive page title help users understand the structure and navigate with assistive technology.

Keyboard access: A skip-to-main-content link becomes visible when focused. Native links and buttons support keyboard interaction. Focus indicators are styled with :focus-visible. The mobile menu can be opened and closed with a button and reports its state through aria-expanded.

ARIA and dynamic feedback: The mobile menu uses aria-controls to identify the navigation it controls. Topic filter buttons use aria-pressed to expose their selected state. A polite aria-live status announces the number and category of visible stories. The form uses aria-describedby to connect the email field to instructions and validation feedback, and aria-invalid is set when the value is invalid. A status message communicates successful demo validation.

Form usability: The email field has a persistent visible label and autocomplete hint. Empty or malformed values trigger a clear error message, and focus returns to the field. Valid-looking input produces a success message. The interface states that this demonstration does not transmit or store the email address.

Visual and responsive design: The color palette prioritizes readable text and identifiable controls. The layout adapts to narrow screens using CSS Grid, Flexbox, and media queries. Reduced-motion preferences are respected, and decorative shapes are hidden from assistive technology while meaningful illustrations have text alternatives.

4. Validation Steps
Open index.html in a browser, then run Lighthouse Accessibility and WAVE against a locally hosted or publicly accessible version. Manually test the skip link, menu, filters, form errors, focus visibility, zoom at 200%, narrow-screen reflow, and reduced-motion settings. Review automated findings and correct issues before production use.

5. Standards and Limitations
The work is informed by WCAG 2.2 and WAI-ARIA Authoring Practices, particularly keyboard operability, labels and instructions, focus visibility, semantic relationships, and status messages. This is an educational prototype, not a claim of formal WCAG conformance or certification. Testing with screen readers and users with disabilities is still recommended.

Conclusion
This task strengthened my understanding of accessible semantic markup, ARIA state communication, keyboard usability, validation feedback, responsive design, and the importance of combining automated checks with manual testing.
