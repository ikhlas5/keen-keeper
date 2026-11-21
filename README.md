# 🌿 KeenKeeper

**Your personal shelf of meaningful connections.** Browse, tend, and nurture the relationships that matter most.

KeenKeeper is a modern, responsive personal relationship management web application built with **Next.js**. It helps users keep track of their friends, family, and professional connections, set communication goals, monitor overdue check-ins, and visualize interaction habits through clean analytics.

---

## ✨ Key Features

- **📊 Relationship Dashboard:** Quick overview of Total Friends, On Track connections, Need Attention alerts, and Monthly Interactions.
- **👥 Dynamic Friend Profiles:** Detailed individual views (`/friends/[friendId]`) featuring relationship goals, contact intervals, overdue status badges, and quick actions (Snooze, Archive, Delete).
- **⚡ Quick Check-In Logging:** One-click logging for **Call**, **Text**, and **Video** interactions with real-time toast notifications.
- **📈 Interactive Analytics:** Visual breakdown of communication habits by interaction type using a responsive Donut Chart.
- **🧭 Seamless Navigation:** Persistent layout with active route highlighting across **Home**, **Timeline**, and **Stats** pages.
- **📱 Fully Responsive UI:** Clean, modern interface styled with Tailwind CSS and daisyUI for desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [daisyUI](https://daisyui.com/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **State Management:** React Context API (`FriendsContext`)
- **Icons & Notifications:** React Icons & React Hot Toast / Toastify

---

## 📂 Project Structure

```text
keen-keeper/
├── public/
│   └── data.json              # Local dataset of friends and interaction intervals
├── src/
│   ├── app/
│   │   ├── friends/[id]/      # Dynamic friend profile details route
│   │   ├── timeline/          # Interaction timeline page
│   │   ├── stats/             # Recharts analytics page
│   │   ├── layout.js          # Root layout with Navbar, Footer & Context Provider
│   │   └── page.js            # Home dashboard
│   ├── Componets/             # Reusable UI components (Navbar, Footer, StatsCards, Charts)
│   └── context/
│       └── FriendsContext.jsx # Global state management for interactions & friend lists
└── package.json
 ---
 
##  Getting Started
Prerequisites
Make sure you have Node.js (v18 or higher) installed on your machine.

Installation
Clone the repository:

Bash
git clone [https://github.com/your-username/keen-keeper.git](https://github.com/your-username/keen-keeper.git)
cd keen-keeper
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.

🔮 Future Enhancements
[ ] Persistent storage using LocalStorage or a backend database (MongoDB / PostgreSQL).

[ ] User authentication for personalized contact shelves.

[ ] Functional Snooze, Archive, and Edit Goal modals.

[ ] Search and filter friends by category (FAMILY, WORK, FRIEND) or status (Overdue, On Track).