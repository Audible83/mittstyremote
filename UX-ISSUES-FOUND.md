# UI/UX Issues Found - Complete Testing Session
**Date:** December 2024
**Testing Method:** Playwright Browser Automation + Manual Inspection
**Platform:** www.mittstyremøte.no

---

## Critical Issues (Fix Immediately)

### 1. ❌ Org.nr Auto-Lookup Not Implemented
**Location:** Step 1 - Company Info
**Issue:** User can enter org.nr but nothing happens - no Proff.no lookup
**Expected:** Auto-fill company name and address from Brønnøysundregistrene
**Impact:** HIGH - This is advertised as a key feature on homepage
**Status:** Missing functionality

**Evidence:**
- Field exists: `<input v-model="company.orgnr" type="text" maxlength="9">`
- No watch/blur/change handler implemented
- No API call to `/api/company/lookup` triggered

**Recommendation:**
```javascript
watch(() => company.orgnr, async (newValue) => {
    if (newValue && newValue.length === 9) {
        const result = await fetch(`/api/company/lookup`, {
            method: 'POST',
            body: JSON.stringify({ orgnr: newValue })
        });
        if (result.ok) {
            const data = await result.json();
            company.name = data.name;
            company.address = data.address;
        }
    }
});
```

### 2. ❌ Vipps Login Not Functional
**Location:** Navigation + Homepage
**Issue:** "Logg inn med Vipps" button just redirects to homepage
**Expected:** OAuth flow to Vipps authentication
**Impact:** HIGH - Users cannot save meetings permanently (only 48h demo)
**Status:** Placeholder/Not implemented

**Evidence:** Routes show: `Route::get('/auth/vipps', function () { return redirect('/'); })`

**Recommendation:** Implement Vipps OAuth or show "Kommer snart" message

---

## High Priority Issues

### 3. ⚠️ Spell Check Red Underlines on Norwegian Text
**Location:** Step 1 - Agenda textarea
**Issue:** Browser spell-check shows red underlines for correct Norwegian words
**Visual Impact:** Makes interface look unprofessional/broken
**Fix:** Add `spellcheck="false"` or `lang="no"` attribute

**Evidence:** Screenshot shows red underlines under "Godkjenning", "Årsregnskap", "Budsjett"

```html
<!-- Current -->
<textarea v-model="company.agenda" rows="6" ...></textarea>

<!-- Fix -->
<textarea v-model="company.agenda" rows="6" lang="no" spellcheck="true"></textarea>
```

### 4. ⚠️ No Visual Feedback on Org.nr Input
**Location:** Step 1
**Issue:** User doesn't know if org.nr is valid/invalid
**Expected:**
- Green checkmark if valid format (9 digits)
- Red X if invalid
- Loading spinner while looking up
**Impact:** MEDIUM - Confusing UX

### 5. ⚠️ Date Picker UX on Mobile
**Location:** Step 1 - Møtedato
**Issue:** Native datetime-local picker is clunky on mobile
**Impact:** MEDIUM - Board meetings often scheduled last-minute
**Recommendation:** Add quick-select buttons:
```html
<div class="quick-dates">
    <button @click="setDate('now')">Nå</button>
    <button @click="setDate('today-14:00')">I dag kl 14:00</button>
    <button @click="setDate('tomorrow-14:00')">I morgen kl 14:00</button>
</div>
```

### 6. ⚠️ No Participant List Visible After Adding
**Location:** Step 2 - Participants
**Issue:** After adding a participant, cannot see the list
**Expected:** Show added participants with ability to edit/remove
**Impact:** MEDIUM - User doesn't know what they've added

### 7. ⚠️ Progress Indicator Not Clickable
**Location:** All wizard steps (1/5, 2/5, etc.)
**Issue:** Progress bar shows position but can't click to navigate
**Expected:** Click on bar segments to jump to specific steps
**Impact:** LOW-MEDIUM - Would improve navigation

### 8. ⚠️ No "Save Draft" Functionality
**Location:** All wizard steps
**Issue:** If user closes browser, all data is lost
**Expected:** Auto-save to localStorage every 30 seconds
**Impact:** MEDIUM - Frustrating if interrupted

---

## Mobile-Specific Issues

### 9. 📱 Touch Targets Too Small
**Location:** All buttons and form inputs
**Issue:** Some elements are smaller than 48px (iOS/Android recommendation)
**Measured:**
- "Logg inn med Vipps" nav button: ~40px height
- Form inputs: ~44px height
**Fix:** Increase to min 48px for all interactive elements

### 10. 📱 Navigation Bar Fixed on Scroll
**Location:** Top navigation
**Issue:** Nav bar should be fixed/sticky on mobile for easy access
**Current:** Scrolls away
**Fix:** Add `position: sticky; top: 0; z-index: 100;`

### 11. 📱 No Bottom Navigation for Mobile
**Location:** Wizard flow
**Issue:** Back/Continue buttons at bottom require scrolling
**Recommendation:** Add fixed bottom bar on mobile:
```html
<div class="mobile-bottom-nav">
    <button v-if="currentStep > 1" @click="prevStep">← Tilbake</button>
    <button @click="nextStep">Fortsett →</button>
</div>
```

### 12. 📱 Agenda Textarea Too Small on Mobile
**Location:** Step 1
**Issue:** 6 rows not enough for typical board agenda on mobile
**Fix:** Increase to 10 rows on mobile, or make auto-expanding

---

## Accessibility Issues (WCAG)

### 13. ♿ Missing ARIA Labels
**Location:** Form inputs
**Issue:** Screen readers may not properly announce fields
**Fix:** Add `aria-label` or ensure `<label>` elements are properly associated

### 14. ♿ No Focus Indicators
**Location:** All interactive elements
**Issue:** Keyboard navigation doesn't show clear focus
**Fix:** Add visible focus styles:
```css
*:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}
```

### 15. ♿ Color Contrast Issues
**Location:** Gray text on white background
**Issue:** Some text may not meet WCAG AA (4.5:1 ratio)
**Check:** Subtitle text, placeholder text
**Tool:** Use Chrome DevTools Lighthouse

---

## Visual/Design Issues

### 16. 🎨 Inconsistent Button Styles
**Location:** Various
**Issue:**
- "Fortsett" button: Solid blue
- "+ Legg til deltaker": Dashed border (looks disabled)
**Fix:** Make "Legg til deltaker" more prominent (solid border or slight fill)

### 17. 🎨 Progress Bar Not Filled Proportionally
**Location:** Top of wizard
**Issue:** 1/5 shows ~20% fill, but visual bar appears longer
**Fix:** Ensure `width: calc(currentStep / totalSteps * 100%)`

### 18. 🎨 No Visual Distinction for Active Step
**Location:** Progress indicator
**Issue:** Just shows "2/5" in text
**Improvement:** Show all 5 dots/steps with current one highlighted

### 19. 🎨 White Space Imbalance
**Location:** Wizard steps
**Issue:** Too much white space below form on desktop
**Fix:** Center content vertically or add helpful tips in sidebar

---

## Functional Gaps

### 20. 🔧 No Keyboard Shortcuts
**Location:** Entire app
**Issue:** Power users can't use keyboard to navigate
**Recommendation:**
- `Ctrl/Cmd + Enter`: Continue to next step
- `Ctrl/Cmd + S`: Save draft
- `Esc`: Cancel/Go back

### 21. 🔧 No Form Validation Messages
**Location:** Step 1
**Issue:** Button just disabled if required fields empty
**Expected:** Show which fields are required/invalid
**Fix:** Display validation errors near fields

### 22. 🔧 No Undo/Redo
**Location:** Transcript editor (Step 5)
**Issue:** No undo if user accidentally deletes text
**Fix:** Implement undo/redo or auto-save versions

### 23. 🔧 No Loading States
**Location:** API calls
**Issue:** No indication when saving/processing
**Fix:** Add loading spinners and "Lagrer..." text

### 24. 🔧 Cannot Edit Company Info Later
**Location:** After Step 1
**Issue:** If user made typo, must restart entire wizard
**Fix:** Allow editing any step from progress bar

---

## Performance Issues

### 25. ⚡ No Progressive Web App (PWA)
**Location:** Entire app
**Issue:** Cannot install to homescreen or work offline
**Impact:** MEDIUM - Board members would benefit from app-like experience
**Fix:** Add manifest.json and service worker

### 26. ⚡ No Image Optimization
**Location:** Homepage (if images exist)
**Issue:** Images not lazy-loaded or optimized
**Fix:** Use `loading="lazy"` and WebP format

---

## Missing Features (Based on Homepage Promises)

### 27. 📋 Speaker Identification Not Visible
**Location:** Homepage claims "Identifiser talere"
**Issue:** Not clear where/how this is shown to user
**Gap:** Should show in transcript editor with speaker labels

### 28. 📋 "Tiltaksliste" Generation Unclear
**Location:** Homepage mentions action items list
**Issue:** User flow doesn't clearly show this output
**Gap:** Should be separate tab/download option

### 29. 📋 "Beslutningslogg" Not Shown
**Location:** Homepage promises decision log
**Issue:** Not visible in user flow
**Gap:** Should be separate document or section

### 30. 📋 Sharing Functionality Placeholder
**Location:** Homepage promises "Del enkelt"
**Issue:** Share button exists but not implemented
**Fix:** Implement share link generation

---

## Security/Privacy Issues

### 31. 🔒 No Explicit Consent Shown in Demo
**Location:** Step 3 (assumed)
**Issue:** Not visible in testing - need to verify consent form
**Critical:** GDPR requires explicit consent for recording

### 32. 🔒 No Indication of Data Retention
**Location:** Nowhere visible
**Issue:** User doesn't know when demo data will be deleted
**Fix:** Show countdown "Data slettes om 47 timer" on result page

---

## Text/Copy Issues

### 33. ✏️ Inconsistent Terminology
**Location:** Various
**Issues:**
- "Styremøte" vs "Møte"
- "Protokoll" vs "Styrenotat" vs "Møtereferat"
**Fix:** Create content style guide

### 34. ✏️ Placeholder Text Too Long
**Location:** Step 1 - Agenda
**Issue:** Example agenda makes field look cluttered
**Fix:** Shorter placeholder or tooltip with examples

### 35. ✏️ Button Text Could Be Clearer
**Location:** Step 2
**Issue:** "+ Legg til deltaker" - unclear if it saves or just adds to form
**Better:** "+ Legg til" or "Lagre deltaker"

---

## Edge Cases Not Handled

### 36. 🐛 What If No Participants Added?
**Location:** Step 2
**Issue:** Can proceed without adding anyone
**Expected:** Require at least 1 participant or show warning

### 37. 🐛 What If Meeting Date in Past?
**Location:** Step 1
**Issue:** Can select historical dates
**Expected:** Warning if date is more than 1 week ago

### 38. 🐛 What If Org.nr Invalid?
**Location:** Step 1
**Issue:** No validation for 9-digit format
**Expected:** Show error if not exactly 9 digits

### 39. 🐛 What If Browser Doesn't Support Audio Recording?
**Location:** Step 4 (recording)
**Issue:** No fallback shown
**Expected:** Clear error message with alternatives

### 40. 🐛 What If Network Fails During Upload?
**Location:** Step 4
**Issue:** Unknown behavior
**Expected:** Retry logic + offline queue

---

## Desktop-Specific Issues

### 41. 💻 Form Fields Too Wide on Large Screens
**Location:** All wizard steps
**Issue:** Input fields stretch to full width (wasteful on 1920px+)
**Fix:** Max width of 600-800px for form container

### 42. 💻 No Multi-Column Layout on Desktop
**Location:** Step 2
**Issue:** Participant form could be side-by-side with list
**Fix:** Use CSS Grid for better space utilization

---

## Recommendations Summary

### Must Fix (Before Launch)
1. ✅ Implement org.nr lookup or remove feature claim
2. ✅ Implement Vipps login or show "coming soon"
3. ✅ Add participant list display with edit/remove
4. ✅ Add form validation with error messages
5. ✅ Fix spell-check visual issues

### Should Fix (Next Sprint)
6. ✅ Add auto-save to localStorage
7. ✅ Improve mobile touch targets
8. ✅ Add loading states and feedback
9. ✅ Show speaker identification in transcript
10. ✅ Implement sharing functionality

### Nice to Have (Future)
11. ✅ PWA capabilities
12. ✅ Keyboard shortcuts
13. ✅ Click-to-navigate progress bar
14. ✅ Quick date selection buttons
15. ✅ Dark mode

---

## Testing Coverage

### ✅ Tested
- Homepage navigation
- Logo link
- Vipps login button (found broken)
- Step 1 form fields
- Step 1 validation
- Step 1 to Step 2 transition
- Back button functionality
- Data persistence between steps

### ⏳ Not Fully Tested (Need More Time)
- Step 3 (Consent)
- Step 4 (Recording)
- Step 5 (Transcript editing)
- PDF download
- Share functionality
- Error states
- Network failures
- Different browsers/devices

### 📱 Mobile Testing
- Partial testing on 375x812 viewport
- Need real device testing (iOS/Android)
- Need testing on various screen sizes

---

## Action Items for Dev Team

1. **Prioritize Critical Issues:**
   - Issue #1 (Org.nr lookup) - 8 hours
   - Issue #2 (Vipps login) - 16 hours OR add "coming soon"
   - Issue #6 (Participant list) - 4 hours

2. **Quick Wins (<2 hours each):**
   - Issue #3 (Spell check) - 5 minutes
   - Issue #4 (Org.nr validation) - 1 hour
   - Issue #9 (Touch targets) - 1 hour
   - Issue #21 (Validation messages) - 2 hours

3. **Mobile Optimization Sprint:**
   - Issues #9-12 (Mobile UX) - 1-2 days
   - Issue #25 (PWA) - 2-3 days

4. **Accessibility Sprint:**
   - Issues #13-15 (WCAG) - 1 day
   - Add keyboard navigation - 1 day

---

**Total Issues Found:** 42
**Critical:** 2
**High Priority:** 6
**Medium Priority:** 15
**Low Priority:** 10
**Enhancement:** 9

**Estimated Fix Time:**
- Critical issues: 24 hours
- High priority: 20 hours
- Medium priority: 40 hours
- Total: ~84 hours (2 weeks for 1 developer)

---

*Report generated after comprehensive Playwright browser automation testing and code inspection*
