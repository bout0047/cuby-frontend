# Cuby Project README

We use this Sveltekit and tailwind boilerplate throughout the whole course.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## General Explanation of the project and its contents
Cuby is built as an anxiety relieving website. It has al sorts of tools to help your anxiety with things like exercises and events. It also shows you statistics to track your anxiety with clicking the Cuby.

### Home Page
On the home page you will find a normal home page with some differences that will add to our application. Things like: ‘Clicks today’, ‘Events this month’. Also, your profile picture which is clickable and will take you to your profile page. There will also be a ‘Next Event’ which is based on the most soon to be event. That event will display information will display the name of the event, the time of the event, the location of the event and an image of the event.

### Profile Page
The profile page is your personal page which displays your information and interests which align with the events you choose. The main information that is displayed is: your name, email address, your goals, and your interests. The goals and interests displayed on this page are decided by you as it is a personal input. There is also an edit button in which you can change certain information that is linked to your profile.

### Events
The events page is where you can find all the events you signed up for. And look at the events you haven’t signed up for. Events are based on your interests. But can also be filtered so that you can see events which don’t align with your interests. You can also search specific events through the events search bar.

### Statistics:
The statistics page shows you some specific statistics that are meant purely for you. How many times you have clicked on the Cuby while doing your exercises, how many events you have attended per month, day, or which option you set your date adjuster to.

### Self-Help
The self-help page is meant to give you exercises you can do to decrease your anxiety. These exercises can vary from meditation to yoga to breathing. If you click on one of these exercises it will link you to a youtube video, or something in that direction. From that point you can do the exercise to help reduce anxiety.

## Overview
Cuby is a comprehensive platform aiming to enhance personal growth and event participation through various microservices. This README outlines the project's progress and future steps as captured in our development roadmap.

# Roadmap
Our roadmap is structured into sprints, each with its own set of goals and activities. The ultimate milestone is to deliver a fully integrated Cuby application with a robust microservice infrastructure.

### Sprint 0: Inception
- **Current Product**: Initial Prototype, Portfolio creation.
- **Completed Activities**:
  - Project planning and environment setup.
  - Writing user stories and documentation.
- **Next Steps**: Finalizing the MVP roadmap, setting up the pipeline, and defining styling guidelines.

### Sprint 1: MVP Foundations
- **Current Product**: MVP with basic event and profile microservices, home page, and security features.
- **Completed Activities**:
  - Established project structure and integrated initial microservices.
  - Conducted hardware prototyping for Cuby.
  - Reassessed goals based on MVP feedback.
- **Next Steps**: Development of the integrated calendar and self-help microservice. Connecting Cuby hardware with the application.

### Sprint 2: MVP Enhancement
- **Current Product**: Enhanced MVP with events, profiles, and basic calendar functionalities.
- **Completed Activities**:
  - Refined existing microservices.
  - Initiated styling and UI polishing.
  - Began integration of microservices with Cuby hardware.
- **Next Steps**: Final integration of all components, extensive debugging, and styling enhancements.

### Sprint 3: MVP Finalization
- **Current Product**: MVP with integrated calendar, self-help microservices, and Cuby connectivity.
- **Completed Activities**:
  - Polished application styling for consistency.
  - Conducted final integration tests.
  - Debugged application to ensure stability.
- **Next Steps**: Preparing for the final presentation and working towards the stretch goals.

### Final Stretch: Additional Goals
- **Stretch Goals**:
  1. Social integration to enhance user connectivity.
  2. User interactions to foster community engagement.
  3. Exploring additional features for Cuby hardware integration.

### Project Conclusion
- **Final Product**: A fully integrated Cuby application with a focus on user engagement and event participation.
- **Final Activities**:
  - Presentation of the completed project.
  - Evaluation of project outcomes against initial goals.
  - Documentation of lessons learned and potential future enhancements.

- A special thank you to all contributors and stakeholders who have made this project possible.


### Things we have used for this project are:
Svelte: https://svelte.dev/
SvelteKit: https://kit.svelte.dev/
Tailwind: https://tailwindcss.com/
Docker: https://www.docker.com/
