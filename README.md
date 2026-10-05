# Customer Service Learning Hub

A local-first static learning site for customerservice.detleng.com. English content, no accounts, no backend, no build step and no external runtime dependencies.

## Preview

Open index.html in a browser, or serve this folder over local HTTP. For example, if Python is installed:

```powershell
Set-Location -LiteralPath 'D:\DETLENG2\customerservice-detleng'
python -m http.server 4175 --bind 127.0.0.1
```

Visit http://127.0.0.1:4175/ . A temporary preview server may already be running for this review; stop it before starting another on the same port.

## Structure

- index.html: semantic shell, navigation, metadata, footer and native dialogs.
- assets/css/styles.css: responsive visual system, focus and reduced motion.
- assets/js/content.js: course stages, roadmap, lesson section reading and source hashes.
- assets/js/activities.js: 39 practice activities, six memory cards and eight revision checks.
- assets/js/app.js: routes, rendering, feedback, progress and private reflection controls.
- CNAME: the intended custom domain. It does not itself configure DNS.
- CONTENT-AUDIT.md and COMPLETION-REPORT.md: source mapping and handover.
- tests/qa.cjs and tests/run.cjs: browser verification; not required to use the site.

## Add future content

Edit the shared COURSE.lessons model for title, number, stable id, stage, accent and availability. All roadmap instances read the same model. Preserve stable ids when renaming cards. The current available route is Lesson 01; adding a new available lesson also requires its section data, activities and routing. Do not change a future card to available until its full content and route work. COURSE.steps and activity step indexes currently belong to Lesson 01. Stages and roadmap length are editable; 50 is a plan, not a hardcoded card count.

## Progress and privacy

The localStorage key is customerservice-learning-v1. It stores Lesson 01 start/resume position, completed sections, successful activity ids, answer state, mistakes and optionally saved reflections. Progress measures 34 Lesson 01 sections. Thirty future lessons do not count towards completion. A correct answer is required for each activity in a section. The last section requires completion of the earlier 33.

The reset control confirms before clearing hub data. Reflection saving is opt-in; unsaved drafts last only within the open session. No learner data is sent anywhere. When storage is unavailable, learning still works for the session with a clear message. Storage is specific to the browser and origin: file preview, localhost and the future custom domain do not share progress. Do not write sensitive personal details in reflections.

## Browser QA

Install Playwright in your own development environment and its browser, then run node tests/run.cjs. To test a specific Chromium/Edge executable, set BROWSER_EXECUTABLE to its full path. Test results are written under tests/results and ignored. The site itself requires neither Node nor Playwright. QA runs in an isolated browser profile and does not affect real learner progress.

## Hosting

This folder is suitable for static hosting at the repository root. CNAME is customerservice.detleng.com. Configure the matching DNS and GitHub Pages settings separately when publishing. No Git initialization, commit, push or deployment was performed in this build.
