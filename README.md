# The Open Journal — Accessible Blog Portal

A responsive sample information portal for Week 3: Enhancing User Experience with Accessibility. Built with HTML5, CSS3, and vanilla JavaScript.

## Run locally
1. Extract this ZIP.
2. Open `index.html` in a modern browser.
3. No build step or package installation is required.

## Features
- Semantic landmarks and logical heading hierarchy.
- Skip-to-main-content link and visible keyboard focus.
- Responsive navigation with `aria-expanded` and `aria-controls`.
- Topic filters with `aria-pressed` and a polite live status message.
- Newsletter form with a visible label, instructions, accessible validation errors, focus handling, and success feedback.
- Responsive layout and reduced-motion support.
- Accessible text alternatives for illustrations.

## Accessibility audit plan
No automated score is claimed; run the tools against the final page:
1. Chrome DevTools → Lighthouse → Accessibility → Generate report.
2. Run WAVE against a locally hosted or public URL.
3. Test with keyboard only: Tab, Shift+Tab, Enter, and Space.
4. Check 200% zoom, narrow-screen reflow, and contrast.
5. If available, test with NVDA or VoiceOver.

## Manual test plan
- Tab from the top and activate the skip link.
- Open/close the mobile menu and verify its state.
- Use each topic filter and verify story visibility and status announcements.
- Submit the form empty, with invalid input, and with a valid-looking email.
- Confirm errors appear, focus returns to the field, and success feedback appears.
- Verify that the form clearly states no data is sent or saved.

## Standards references
The implementation is informed by WCAG 2.2 principles and WAI-ARIA Authoring Practices. Automated tools do not replace manual keyboard, assistive-technology, and user testing.
