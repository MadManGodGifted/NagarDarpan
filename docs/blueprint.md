# **App Name**: CivicFence

## Core Features:

- Interactive Map & Project Markers: A full-screen interactive map centered on Delhi displaying pinned markers for public infrastructure projects, allowing users to discover projects by geographic location.
- Project Information Popups: Interactive popups on map markers, showing project name, a brief description, placeholder images for before/after views, and key civic impact statistics.
- Detailed Project View: A dedicated screen providing comprehensive details for a selected project, including its title, status, work completed bullet points, civic impact stats, timeline, budget transparency, and source links.
- Geo-fence & Notification Simulation: Simulate proximity to a project's geo-fence (via a dedicated button) to trigger context-aware notification alerts and display a history of past project-related notifications.
- User Authentication: Enable secure user login functionality using Firebase Authentication with options for Google or email, providing a foundation for personalized app usage and settings.
- User Profile & Settings Management: Allow users to configure their app preferences, including location sharing, notification preferences, language selection (English/Hindi), and the ability to view their notification history.
- Firebase Data Storage: Utilize a Firestore-like structure within Firebase to store and retrieve all project-related data (details, images, impact stats) and user-specific preferences.

## Style Guidelines:

- Primary Color: A deep, professional Teal (#006D77). This color is chosen for its association with reliability and civic institutions, making it suitable for primary calls-to-action and prominent UI elements. HSL equivalent (185, 100%, 23%).
- Background Color: A subtle, very light cool grey-blue (#DFEDEF). This highly desaturated and bright background creates ample whitespace and provides a clean, modern canvas that harmonizes with the primary teal, enhancing readability in a light scheme. HSL equivalent (185, 20%, 95%).
- Accent Color: A vibrant Orange (#FF9F1C). This provides a strong, high-contrast element against the primary teal and background, ideal for crucial calls-to-action, active states, and elements requiring immediate attention, ensuring excellent accessibility. HSL equivalent (33, 100%, 55%).
- Headline Font: 'Space Grotesk' (sans-serif) will be used for all main titles and section headers. Its modern and slightly technical feel aligns well with a transparency tool. Body Font: 'Inter' (sans-serif) will be employed for all body text, offering high readability across various screen sizes and a neutral, objective aesthetic that supports informative content.
- A curated set of icons from 'Heroicons' or 'Lucide' should be consistently used throughout the application. These icon sets are chosen for their clean lines and modern appearance, which will contribute to a unified and professional user interface.
- The design will be clean, modern, and mobile-responsive, built with rounded cards, subtle shadows for visual depth, and ample whitespace to improve readability and user focus. It will feature a full-screen interactive map and be fully responsive to ensure seamless interaction across mobile, tablet, and desktop devices. Subtle Delhi-themed elements, like a faint India Gate silhouette in map styling, will provide a localized touch.
- Subtle and performant UI animations and transitions will be implemented for screen changes, modal presentations, and interactive elements. These micro-interactions are designed to enhance the user experience by providing smooth feedback without distracting from the app's primary purpose.