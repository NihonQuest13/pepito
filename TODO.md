# TODO.md for Nathan Inc. Travel Portal

## Project Overview
This is a no-code admin panel for a travel portal website. The site has three phases: before trip (reservation page with countdown), during trip (ticket exploration), and after trip (archive). Texts are modified in `script.js` in the `SITE_CONTENT` object.

## Phases and Features

### Phase 1: Before Trip (Reservation Page)
- [x] Home page with booking form (guess destination "Colmar")
- [x] Login modal with reference "pepito"
- [x] Passenger info display
- [x] Service bulletin with notifications
- [x] Conditional briefings (Samedi 3 states, Dimanche 2 states)
- [x] Countdown timer to trip start
- [x] Weather widget with API and cache
- [x] Promo card for next trip
- [x] Admin bypass with code "equirungblove127"
- [x] Easter egg navigation (Services, Voyages, Contact, Feedback, Colmar)

### Phase 2: During Trip (Active Voyage)
- [x] Transition from Phase 1 on countdown end or admin bypass
- [x] Spotify jukebox for ambiance
- [x] Ticket journal with 4 horizontal pages
- [x] Ticket composting logic (reveal récit, stamp animation, unlock next)
- [x] Touch gestures for navigation
- [x] Map links for each ticket
- [x] Transition to Phase 3 after last ticket

### Phase 3: After Trip (Archive)
- [x] Gallery section (placeholder)
- [x] Guestbook with guess form (correct: "colmar")
- [x] Archived status

## Notifications Engine
- [x] Sequenced notifications with reveal timestamps
- [x] Site notifications display
- [x] Email simulation (console log)
- [x] Automatic briefing updates on notification reveal

## Technical Features
- [x] Responsive design (mobile-friendly)
- [x] Local storage for weather cache and user messages
- [x] Cache busting for CSS/JS
- [x] PWA meta tags
- [x] Font loading optimization
- [x] Modal animations
- [x] Phase transition animations

## Core Features
- [x] Feedback modal transformed into destination guessing console
- [x] Admin-only access to view stored user guesses (protected by bypass code)
- [x] Guess storage in localStorage with timestamps

## Files Structure
- `index.html`: Main HTML structure with all phases
- `style.css`: Comprehensive CSS with variables, responsive design
- `script.js`: All logic, content, and engines
- `TODO.md`: This file

## Running the Project
- Open `index.html` in a modern browser
- No server required (static)
- Weather API requires internet for live data, falls back to cache

## Potential Improvements
- Add actual image assets (currently placeholders)
- Implement real email sending
- Add more interactive elements in Phase 3
- Enhance accessibility
- Add unit tests for logic
- Optimize performance (lazy load images, etc.)
