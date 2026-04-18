# Technical Documentation

## Project Overview

This project is an interactive personal portfolio website developed using HTML, CSS, and JavaScript.

It is based on the first assignment, but it was improved by adding dynamic content, user interaction, theme switching, and better feedback for the user.

## Project Structure

The project is organized as follows:

- `index.html` → main webpage structure
- `css/styles.css` → styling, layout, transitions, and dark mode design
- `js/script.js` → JavaScript logic for greeting, tabs, theme toggle, localStorage, and form validation
- `docs/technical-documentation.md` → technical explanation of the project
- `docs/ai-usage-report.md` → explanation of how AI tools were used

## Interactive Features

The website includes navigation buttons that allow the user to switch between the About, Projects, and Contact sections without leaving the page.

This makes the website more interactive and improves usability compared to the first version.

## Data Handling

The project uses `localStorage` to save the user’s theme preference.

If the user selects dark mode, the website remembers this preference and applies it again when the page is reopened.

The contact form also handles user input and checks whether the required fields are empty before showing feedback.

## Animation and Transitions

Simple transitions and hover effects were added to improve the user experience.

These include:
- hover effects on buttons
- smooth visual changes when switching sections
- smooth color transitions when changing the theme

The animations were kept simple so the design remains clean and easy to use.

## Error Handling and Feedback

The contact form provides clear feedback to the user.

If any field is left empty, an error message is displayed.

If the form is filled correctly, a success message is shown instead.

This helps the user understand what happened and what action is needed.

## Responsiveness

The layout was designed to work on different screen sizes.

Basic responsive styling was used so the content remains readable and accessible on desktop and mobile devices.

## Summary

This project demonstrates basic modern front-end development concepts by combining structure, styling, interactivity, and user feedback in one portfolio website.
